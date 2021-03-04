<template>
  <div id="app">
    <el-table
      :data="recordTable"
      element-loading-text="loading"
      border
    >
      <el-table-column align="center" prop="rejectTime" label="驳回时间">
      </el-table-column>
      <el-table-column align="center" prop="rejectReason" label="驳回原因">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default{
  name: 'app',
  async created () {
    console.log('created!')
    this.recordTable = await this.getRejectRecord()
  },
  data () {
    return {
      recordTable: [{
        rejectTime: '',
        rejectReason: ''
      }],
      loading: true
    }
  },
  methods: {
    async getRejectRecord () {
      const res = await this.$http.get('../static/db.json')
      console.log(res.data.result)
      // 返回需要的结果
      return res.data.result
    }
  },
  mounted () {
    ;
  }
}
</script>

<style>

</style>
