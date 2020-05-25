<template>
  <div>
    <el-table
      ref="multipleTable"
      v-loading="isLoad"
      :data="data"
      stripe
      border
      tooltip-effect="dark"
      style="width: 100%;"
      @sort-change="handleSortChange"
    >
      <el-table-column
        align="center"
        type="selection"
        width="40"
      />
      <el-table-column v-if="expand" type="expand">
        <template slot-scope="props">
          <el-card class="box-card" shadow="hover">
            <div v-for="eitem in expand" :key="eitem.field" class="text item">
              <span>{{ eitem.label }}</span>
              <span>{{ format(eitem.field, props.row[eitem.field]) }}</span>
            </div>
          </el-card>
        </template>
      </el-table-column>
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
            <el-button v-for="item in rowBtns" :key="item.key" size="small" :type="item.type ? item.type :'primary'" :icon="item.icon" class="toolBtn" @click="handleBtnClick(item.click, scope.row)">
              {{ item.label }}
            </el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  props: {
    data: {
      type: Array,
      required: true
    },
    isLoad: {
      type: Boolean,
      required: true
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
    onSortChange: {
      type: Function
    }
  },
  data() {
    return {
      isload: true,
      order: []
    }
  },
  methods: {
    handleBtnClick(Fun, row) {
      Fun && Fun(row)
    },
    formatRow: function(row, column, cellValue) {
      if (this.format) {
        return this.format(column.property, cellValue)
      } else {
        return cellValue
      }
    },
    handleSortChange(column) {
      const { prop, order } = column
      var idx = this.order.indexOf(prop)
      if (idx >= 0) {
        this.order.splice(idx)
      }
      idx = this.order.indexOf('-' + prop)
      if (idx >= 0) {
        this.order.splice(idx)
      }
      if (order) {
        const orderBy = order === 'ascending' ? prop : '-' + prop
        this.order.push(orderBy)
      }
      this.onSortChange && this.onSortChange(this.order)
    },
    getSelect() {
      return this.$refs.multipleTable.selection
    }
  }
}
</script>

<style lang="scss" scoped>
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
