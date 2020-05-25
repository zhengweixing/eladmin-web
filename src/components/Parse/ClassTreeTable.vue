<template>
  <div>
    <el-row :gutter="20" class="tool-container">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-button-group style="float: right;margin: 5px;">
          <el-button icon="el-icon-search" @click="showFilter = !showFilter" />
          <el-dropdown class="select-field">
            <el-button icon="el-icon-s-grid" />
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
        <el-button type="primary" icon="el-icon-search" @click="handleFilter">
          搜索
        </el-button>
      </el-col>
    </el-row>
    <el-table
      ref="multipleTable"
      v-loading="loading"
      row-key="objectId"
      :data="tableData"
      lazy
      :load="load"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
      border
      stripe
      tooltip-effect="dark"
      style="width: 100%;"
      @select="select"
    >
      <el-table-column v-if="selection" type="selection" width="55" />
      <template v-for="item in columns">
        <el-table-column
          v-if="item.show"
          :key="item.label"
          :prop="item.field"
          :label="item.label"
          :width="item.width"
          :align="item.align ? item.align : 'center'"
          :sortable="item.sortable ? item.sortable : false"
          :formatter="formatRow"
        >
          <template slot-scope="scope">
            <svg-icon v-if="item.type == 'icon'" :icon-class="scope.row[item.field]" />
            <span v-else>{{ scope.row[item.field] }}</span>
          </template>
        </el-table-column>
      </template>
      <el-table-column v-if="rowBtns" label="操作" fixed="right" width="150" align="center">
        <template slot-scope="scope">
          <el-button-group>
            <el-button v-for="item in rowBtns" :key="item.key" :type="item.type ? item.type :'primary'" :icon="item.icon" class="toolBtn" @click="handleBtnClick(item.click, scope.row)">
              {{ item.label }}
            </el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

import * as api from '@/api/iotapi'
import { dateFormat } from '@/utils/global'

export default {
  props: {
    className: {
      type: String,
      required: true
    },
    selection: {
      type: Boolean,
      default: function() {
        return true
      }
    },
    rowBtns: {
      default: function() {
        return [
          // { label: '新增', click: this.handleCreate, type: 'primary', icon: 'el-icon-circle-plus' }
        ]
      },
      type: Array
    },
    columns: {
      default: function() {
        return [
          // { field: 'objectId', label: 'ID', align: 'left' },
          // { field: 'updatedAt', label: '更新时间', sortable: 'custom' }
        ]
      },
      type: Array,
      required: true
    },
    expand: {
      default: function() {
        return [
          // { field: 'createdAt', label: '创建时间', sortable: 'custom' }
        ]
      },
      type: Array
    },
    format: {
      default: function(property, cellValue) {
        return cellValue
      },
      type: Function
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
    }
  },
  data() {
    return {
      showFilter: false,
      loading: false,
      tableData: []
    }
  },
  created: function() {
    console.log(111)
    var self = this
    this.getData('0', function(nodes) {
      self.tableData = nodes
    })
  },
  methods: {
    select(selection, row) {
      console.log(selection, row)
    },
    request(where, resolve) {
      api['get_classes_' + this.className](
        {
          limit: 2000,
          order: 'orderBy',
          where: JSON.stringify(where)
        }
      ).then(data => {
        var nodes = []
        data.results.map(row => {
          row.hasChildren = true
          nodes.push(row)
        })
        resolve(nodes)
      })
    },
    getData(Id, resolve) {
      var where = {}
      if (Id) {
        where = {
          parent: {
            __type: 'Pointer',
            className: this.className,
            objectId: Id
          }
        }
      }
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
            this.request(where, resolve)
          })
        } else {
          where[this.search.key] = {
            '$regex': this.search.value,
            '$options': 'i'
          }
          this.request(where, resolve)
        }
      } else {
        this.request(where, resolve)
      }
    },
    load(tree, treeNode, resolve) {
      this.getData(tree.objectId, resolve)
    },
    handleBtnClick(Fun, row) {
      Fun && Fun(row)
    },
    handleFilter() {
      var self = this
      self.loading = true
      var resolve = function(nodes) {
        self.loading = false
        self.tableData = nodes
      }
      if (self.search.value.length === 0) {
        self.getData('0', resolve)
      } else {
        self.getData(false, resolve)
        self.search.value = ''
      }
    },
    formatRow: function(row, column, cellValue) {
      if (column.property === 'updatedAt' || column.property === 'createdAt') {
        const datetime = new Date(cellValue)
        return dateFormat(datetime, 'YYYY-mm-dd HH:MM')
      } else if (this.format) {
        return this.format(column.property, cellValue)
      } else {
        return cellValue
      }
    },
    getSelect() {
      return this.$refs.multipleTable.selection
    }
  }
}
</script>

<style lang="scss" scoped>
  .select-field {
    border-left:1px solid #DCDFE6;
  }
  .select-field:active {
    border-left:1px solid #3a8ee6;
  }
  .tool-container {
    margin-bottom: 8px;
  }
  .toolBtn {
    margin-right: 5px !important;
    padding: 5px !important;
  }
  .text {
    font-size: 14px;
  }
  .item {
    padding-top: 16px;
  }
</style>
