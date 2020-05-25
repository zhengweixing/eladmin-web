<template>
  <div>
    <div class="main-box">
      <el-row :gutter="20" class="tool-container">
        <el-col :xs="24" :sm="18" :md="20" :lg="20" :xl="20">
          <el-button-group style="padding-bottom: 5px;">
            <el-button v-for="item in topBtns" :key="item.label" size="small" :type="item.type ? item.type :'primary'" :icon="item.icon" @click="handleBtnClick(item)">{{ item.label }}</el-button>
            <el-button :loading="downloadLoading" size="small" type="success" icon="el-icon-download" @click="handleDownload">导出</el-button>
            <el-button type="warning" size="small" icon="el-icon-key" @click="dialogSetACLVisible = true">权限</el-button>
            <el-button type="danger" size="small" icon="el-icon-delete" @click="handleDelete">删除</el-button>
          </el-button-group>
        </el-col>
        <el-col :xs="24" :sm="6" :md="4" :lg="4" :xl="4">
          <el-button-group style="float: right;margin: 5px;">
            <el-button size="small" icon="el-icon-search" @click="showFilter = !showFilter" />
            <el-button size="small" icon="el-icon-monitor" @click="handleShowType" />
            <el-dropdown class="select-field">
              <el-button size="small" icon="el-icon-s-grid" />
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="item in columns" :key="item.field">
                  <el-checkbox v-model="item.show">{{ item.label }}</el-checkbox>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-button-group>
        </el-col>
        <el-col v-if="showFilter" class="tool-container">
          <el-input v-model="search.value" style="width: 300px">
            <el-select slot="prepend" v-model="search.key" default-first-option placeholder="请选择" style="width: 110px">
              <el-option v-for="item in search.opts" :key="item.key" :label="item.label" :value="item.key" />
            </el-select>
          </el-input>
          <el-button type="primary" size="medium" icon="el-icon-search" @click="handleFilter">
            搜索
          </el-button>
        </el-col>
      </el-row>
      <ClassTable
        v-if="showType==='Table'"
        ref="classBox"
        :data="tableData"
        :columns="columns"
        :expand="expand"
        :row-btns="rowBtns"
        :format="formatRow"
        :is-load="loading"
        :on-sort-change="onSortChange"
      />
      <ClassCard
        v-if="showType === 'Card'"
        ref="classBox"
        :data="tableData"
        :columns="columns"
        :expand="expand"
        :row-btns="rowBtns"
        :format="formatRow"
        :is-load="loading"
        :on-sort-change="onSortChange"
      />
      <el-pagination
        :current-page="currentPage"
        :page-size="pageSize"
        :total="totalCount"
        :page-sizes="pageSizes"
        :small="pagination.small"
        :layout="pagination.layout"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <el-dialog title="选择角色" :visible.sync="dialogSetACLVisible">
      <ClassCard
        :data="tableData"
        :columns="columns"
        :expand="expand"
        :row-btns="rowBtns"
        :format="formatRow"
        :is-load="loading"
        :on-sort-change="onSortChange"
      />
    </el-dialog>
  </div>
</template>

<script>

import { Message } from 'element-ui'
import ClassTable from '@/components/Parse/ClassTable'
import ClassCard from '@/components/Parse/ClassCard'
import * as api from '@/api/iotapi'
import { dateFormat } from '@/utils/global'

export default {
  components: {
    ClassTable,
    ClassCard
  },
  props: {
    className: {
      type: String,
      required: true
    },
    query: {
      default: function() {
        return false
      },
      type: Object
    },
    columns: {
      type: Array,
      default: function() {
        return []
      },
      required: true
    },
    search: {
      default: function() {
        return {
          // key: 'devaddr',
          // value: '',
          // opts: [
          //   { label: '设备地址', key: 'devaddr' },
          //   { label: '产品名称', key: 'product' }]
        }
      },
      type: Object
    },
    topBtns: {
      default: function() {
        return []
      },
      type: Array
    },
    rowBtns: {
      default: function() {
        return [
          // { label: '编辑', click: this.handleCellClick, type: 'primary', icon: 'el-icon-edit' }
        ]
      },
      type: Array
    },
    expand: {
      default: function() {
        return []
      },
      type: Array
    },
    format: {
      default: function(_property, cellValue) {
        return cellValue
      },
      type: Function
    },
    pagination: {
      type: Object,
      default: function() {
        return {
          small: false,
          layout: 'total, sizes, prev, pager, next, jumper'
        }
      }
    },
    defaultShowType: {
      type: String,
      default: function() {
        return 'Table'
      }
    }
  },
  data() {
    return {
      showFilter: false,
      showType: 'Table',
      dialogSetACLVisible: false,
      loading: true,
      downloadLoading: false,
      tableData: [],
      currentPage: 1,
      totalCount: 0,
      pageSizes: [10, 50, 200, 500, 1000],
      pageSize: 10,
      order: ['-updatedAt']
    }
  },
  created() {
    this.showType = this.defaultShowType
    this.getData(this.currentPage)
  },
  methods: {
    handleFilter() {
      this.getData(1)
    },
    handleBtnClick(item) {
      var Fun = item.click
      Fun && Fun(item)
    },
    handleShowType() {
      if (this.showType === 'Table') {
        this.showType = 'Card'
      } else if (this.showType === 'Card') {
        this.showType = 'Table'
      }
    },
    handleDelete() {
      this.loading = true
      const selectData = this.$refs.classBox.getSelect()
      var requests = []
      var ids = []
      selectData.map(row => {
        ids.push(row.objectId)
        requests.push({
          method: 'DELETE',
          path: '/classes/' + this.className + '/' + row.objectId
        })
      })
      api.post_batch({ batch: { requests: requests }}).then(response => {
        this.loading = false
        const { data } = response
        var i = 0
        var msg = ''
        data.map(result => {
          var id = ids[i]
          if (result.error) {
            msg += id + ':' + result.error.error + '<br/>'
          }
          i++
        })
        if (msg.length > 0) {
          Message({
            message: msg,
            dangerouslyUseHTMLString: true,
            type: 'error',
            duration: 10 * 1000
          })
        } else {
          Message({
            message: '操作成功!',
            type: 'success',
            duration: 5 * 1000
          })
        }
        this.getData(this.currentPage)
      }).catch(error => {
        console.log(error)
        this.loading = false
      })
    },
    request(currentPage, where) {
      var query = {
        where: JSON.stringify(where),
        keys: 'count(*)',
        limit: this.pageSize,
        order: this.order.join(','),
        skip: (currentPage - 1) * this.pageSize
      }
      if (this.query) {
        if (this.query.include) {
          query.include = this.query.include
        }
        if (this.query.keys) {
          query.keys += ',' + this.query.keys
        }
        if (this.query.order) {
          query.order = this.query.order + ',' + query.order
        }
      }
      api['get_classes_' + this.className](query).then(response => {
        this.loading = false
        const { data } = response
        this.currentPage = currentPage
        this.totalCount = data.count
        this.tableData = data.results
      }).catch(error => {
        console.log(error)
        this.loading = false
      })
    },
    onSortChange(order) {
      this.order = order
      this.getData(this.currentPage)
    },
    handleSizeChange(PageSize) {
      this.pageSize = PageSize
      this.getData(1)
    },
    handleCurrentChange(currentPage) {
      this.getData(currentPage)
    },
    handleDownload() {
      this.downloadLoading = true
      const self = this
      const selectData = this.$refs.classBox.getSelect()
      const formatJson = function(filterVal) {
        return selectData.map(row => filterVal.map(key => {
          return self.formatRow(key, row[key])
        }))
      }
      import('@/vendor/Export2Excel').then(excel => {
        var tHeader = []
        var filterVal = []
        var columns = this.columns.concat(this.expand)
        columns.map(item => {
          tHeader.push(item.label)
          filterVal.push(item.field)
        })
        const data = formatJson(filterVal)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: this.className
        })
        this.downloadLoading = false
      })
    },
    getData(currentPage) {
      this.loading = true
      var where = this.query.where ? this.query.where : {}
      if (this.search.value.length > 0) {
        const opt = this.search.opts.find((item) => item.key === this.search.key)
        if (opt.className) {
          var subwhere = {}
          subwhere[opt.subkey] = { '$regex': this.search.value, '$options': 'i' }
          api['get_classes_' + opt.className](
            {
              limit: 50,
              keys: 'objectId',
              where: JSON.stringify(subwhere)
            }
          ).then(response => {
            const { data } = response
            var ids = []
            data.results.map(result => {
              ids.push({
                '__type': 'Pointer',
                'className': opt.className,
                objectId: result.objectId
              })
            })
            where[this.search.key] = {
              '$in': ids
            }
            this.request(currentPage, where)
          })
        } else {
          where[this.search.key] = {
            '$regex': this.search.value,
            '$options': 'i'
          }
          this.request(currentPage, where)
        }
      } else {
        this.request(currentPage, where)
      }
    },
    formatRow: function(property, cellValue) {
      if (property === 'updatedAt' || property === 'createdAt') {
        const datetime = new Date(cellValue)
        return dateFormat(datetime, 'YYYY-mm-dd HH:MM')
      } else if (this.format) {
        return this.format(property, cellValue)
      } else {
        return cellValue
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .tool-container {
    margin-bottom: 8px;
  }
  .el-pagination {
    margin-top: 5px;
  }
  .select-field {
    border-left:1px solid #DCDFE6;
  }
  .select-field:active {
    border-left:1px solid #3a8ee6;
  }
</style>
