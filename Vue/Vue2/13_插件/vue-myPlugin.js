/*
vue的插件库
*/
(function () {

    const MyPlugin = {}
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或属性
        Vue.myGlobalMethod = function () {
            // 逻辑
            console.log('Vue函数对象的方法myGlobalMethod()')
        }

        // 2. 添加全局资源
        Vue.directive('my-directive', function (el, binding) {
            el.textContent = binding.value.toUpperCase()
        })

        // 3. 注入组件
        Vue.mixin({
            created: function () {
                // 逻辑...
            }
        })
})