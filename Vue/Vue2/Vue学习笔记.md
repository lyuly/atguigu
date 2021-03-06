## 双向绑定

`v-model`


```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <title>双向绑定</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/vue/2.6.12/vue.min.js"></script>
  </head>

  <body>
    <div id="app">
      <!-- 字符串连接 -->
      <p>{{ message + '官网地址: www.baidu.com' }}</p>
      <!-- 字符串反转 -->
      <p>{{ message.split('').reverse().join('') }}</p>
      <input v-model="message" type="text" />
    </div>
    
    <script>
      new Vue({
        el: '#app',
        data: {
          message: '百度一下!!!'
        }
      })
    </script>
  </body>
</html>
```



## 列表输出

`v-for`

**单维数组**

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <title>列表输出</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/vue/2.6.12/vue.min.js"></script>
  </head>

  <body>
    <div id="app">
      <ul>
        <li v-for="todo in todos">
          {{ todo.text }}
        </li>
      </ul>
    </div>
  </body>

  <script>
    new Vue({
      el: '#app',
      data: {
        todos: [
          { text: '先学JavaScript' },
          { text: '再学Vue.js' },
          { text: '最后做一个尴尬的项目' }
        ]
      }
    })
  </script>
</html>
```

**多维数组**

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <title>列表输出2</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/vue/2.6.12/vue.min.js"></script>
  </head>

  <body>
    <div id="app">
      <ul id="example">
        <li v-for="(item, index) in items" :key="index">
          {{ parentMessage }} - {{ index }} - {{ item.message }}
        </li>
      </ul>
    </div>

    <script>
      var example = new Vue({
        el: '#example',
        data: {
          parentMessage: 'Daydayup',
          items: [
            { message: 'www.baidu.com' },
            { message: 'www.google.com' }
          ]
        }
      })
    </script>
  </body>
</html>
```



## 条件判断

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <title>条件判断</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/vue/2.6.12/vue.min.js"></script>
  </head>

  <body>
    <div id="app">
      <h1 v-if="ok">表白成功</h1>
      <h1 v-else="!ok">表白失败</h1>

      <h1 v-show="ok">😄</h1>
      <h1 v-show="!ok">😭</h1>

      <button @click="ok=!ok">切换</button>
    </div>

    <script>
      var app = new Vue({
        el: '#app',
        data: {
          ok: false
        }
      })
    </script>
  </body>
</html>
```

