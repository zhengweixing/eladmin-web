<template>
  <div>
    <el-tree
      :props="props"
      :data="tableData"
      :load="loadNode"
      node-key="objectId"
      lazy
      :expand-on-click-node="false"
      :show-checkbox="selection"
    >
      <span slot-scope="{node, data}" class="custom-tree-node">
        <span @click="() => openDialog(node, data)">{{ node.label }}</span>
      </span>
    </el-tree>
    <el-dialog
      v-if="currentItem"
      :title="'【' + currentItem[titleColumn.field] + '】'"
      :visible.sync="dialogVisible"
    >
      <span>
        <el-row v-for="eitem in columns" :key="eitem.key" class="item">
          <el-col :span="4"><span class="title">{{ eitem.label }}</span></el-col>
          <el-col :span="20"><span>{{ formatRow(eitem.field, currentItem[eitem.field]) }}</span></el-col>
        </el-row>
        <el-row v-for="eitem in expand" :key="eitem.key" class="item">
          <el-col :span="4"><span class="title">{{ eitem.label }}</span></el-col>
          <el-col :span="20"><span>{{ formatRow(eitem.field, currentItem[eitem.field]) }}</span></el-col>
        </el-row>
      </span>
      <span v-if="rowBtns" slot="footer" class="dialog-footer">
        <el-button v-for="item in rowBtns" :key="item.key" size="small" :type="item.type ? item.type :'primary'" :icon="item.icon" class="toolBtn" @click="() => handleBtnClick(item)">
          {{ item.label }}
        </el-button>
      </span>
    </el-dialog>
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
    }
  },
  data() {
    return {
      currentItem: null,
      dialogVisible: false,
      tableData: [],
      props: {
        isLeaf: 'hasChildren'
      }
    }
  },
  created: function() {
    this.titleColumn = this.columns.find((item) => item.isTitle)
    this.props.label = this.titleColumn.field
  },
  methods: {
    handleBtnClick(node) {
      node.click && node.click(node)
    },
    openDialog(node, data) {
      this.currentItem = data
      this.dialogVisible = true
    },
    getData(Id, resolve) {
      var where = {
        parent: {
          __type: 'Pointer',
          className: this.className,
          objectId: Id
        }
      }
      api['get_classes_' + this.className](
        {
          limit: 2000,
          order: 'orderBy',
          where: JSON.stringify(where)
        }
      ).then(response => {
        const { data } = response
        var nodes = []
        data.results.map(row => {
          row.isLeaf = true
          nodes.push(row)
        })
        resolve(nodes)
      })
    },
    loadNode(node, resolve) {
      if (node.level === 0) {
        return this.getData('0', resolve)
      }
      this.getData(node.data.objectId, resolve)
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
    },
    getSelect() {
      return this.$refs.multipleTable.selection
    }
  }
}
</script>

<style lang="scss" scoped>
  .item {
    font-size: 15px;
    margin-left: 15px;
  }
  .item .title{
    padding-top: 6px;
    display: inline-block;
    font-weight: bold;
  }
</style>
