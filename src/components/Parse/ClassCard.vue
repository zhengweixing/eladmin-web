<template>
  <div>
    <el-row v-loading="isLoad" :gutter="7">
      <el-col v-for="item in data" :key="item.objectId" :xs="24" :sm="12" :md="12" :lg="8" :xl="6">
        <el-card class="box-card">
          <div slot="header">
            <span>
              <el-checkbox v-model="item.checked" class="cardTitle">
                <span v-if="titleColumn">{{ item[titleColumn.field] }}</span>
              </el-checkbox>
            </span>
            <el-link v-for="btn in rowBtns" :key="btn.label" :underline="false" :icon="btn.icon" class="toolBtn" @click="handleBtnClick(btn.click, scope.row)">
              {{ btn.icon?'':btn.label }}
            </el-link>
          </div>
          <div>
            <el-col v-if="iconColumn" :xs="24" :sm="24" :md="4" :lg="8" :xl="8">
              <el-image :src="item[iconColumn.field]">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture" />
                </div>
              </el-image>
            </el-col>
            <el-col :xs="24" :sm="24" :md="20" :lg="16" :xl="16">
              <template v-for="column in columns">
                <div v-if="column.show" :key="column.field" class="item">
                  <span class="title">{{ column.label }} :</span>
                  <span>{{ format(column.field, item[column.field]) }}</span>
                </div>
              </template>
            </el-col>
            <el-col :xs="24">
              <el-link class="more el-icon-more" @click="showExtend(item)" />
            </el-col>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-dialog title="扩展字段" :visible.sync="dialogVisible">
      <div v-for="eitem in expand" :key="eitem.key" class="item">
        <span class="title">{{ eitem.label }}</span>
        <span>{{ format(eitem.field, currentItem[eitem.field]) }}</span>
      </div>
    </el-dialog>
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
      dialogVisible: false,
      currentItem: false,
      order: []
    }
  },
  created: function() {
    this.iconColumn = this.columns.find((item) => item.isIcon)
    this.titleColumn = this.columns.find((item) => item.isTitle)
  },
  methods: {
    showExtend(item) {
      this.currentItem = item
      this.dialogVisible = true
    },
    handleBtnClick(Fun, row) {
      Fun && Fun(row)
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
      return this.data.filter((item) => item.checked)
    }
  }
}
</script>

<style lang="scss" scoped>
    .box-card{
      border-top-width: 3px;
      margin-bottom: 8px;
    }
    .cardTitle{
      font-weight: bolder;
      color: #7f1515;
    }
    .toolBtn {
      float: right;
      padding: 3px;
    }
    .more {
      float: right;
      margin:8px;
    }
    .item {
      font-size: small;
      color: #154d82;
    }
    .item .title{
      padding-top: 6px;
      display: inline-block;
      font-weight: bold;
    }
    .box-card:hover {
      border-top-color: dodgerblue;
    }
   .image-slot{
      margin-right: 5px;
   }
   .el-icon-picture{
     font-size: 80px;
     color: silver;
   }
</style>
