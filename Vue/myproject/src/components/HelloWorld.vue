<!-- <template>
  <div id="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '欢迎来到vue学习笔记!'
    }
  }
}
</script>

<style>

</style> -->

<template>
  <div id="vue_det">
    <h1>site : {{site}}</h1>
    <h1>url : {{url}}</h1>
    <h1>{{details()}}</h1>
  </div>
</template>

<script>
export default {
  name: 'vue_det',
  data () {
    return {
      site: 'vue教程',
      url: 'www.vue.org',
      alexa: '1000'
    }
  },
  methods: {
    details () {
      return this.site + ' - 学的不仅是技术，更是梦想! '
    }
  }
}
</script>

<style>

</style>
