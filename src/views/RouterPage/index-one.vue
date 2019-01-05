<template>
  <div class="router-one components-wrap">
    <el-row>
      <el-col :span="12">
        <card-title icon="qq" title="动态路由测试"></card-title>
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期">
          </el-table-column>
          <el-table-column
            prop="name"
            label="日期">
          </el-table-column>
          <el-table-column
            prop="detail"
            label="详情">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CardTitle from '@/components/CardTitle'
export default {
  components: {
    CardTitle
  },
  data () {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: new Date().getTime()
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: new Date().getTime()
        }
      ]
    }
  },
  methods: {
    handleClick (row) {
      const zip = row.zip
      this.$router.push({
        name: 'order_index',
        params: {
          id: zip
        }
      })
    }
  }
}
</script>

<style lang="css">
</style>
