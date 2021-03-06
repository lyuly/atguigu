//  基础类型
(()=>{
  // 布尔类型
  //  基本语法
  // let 变量名: 数据类型 = 值
  let flag:boolean = true
  console.log(flag)

  // 数字类型
  let a1: number = 10 // 十进制
  let a2: number = 0b1010 // 二进制
  let a3: number = 0o12 // 八进制
  let a4: number = 0xa  // 十六进制
  console.log(a1)
  console.log(a2)
  console.log(a3)
  console.log(a4)
  // 字符串类型 ----->string
  let str1:string = '床前明月光'
  let str2:string = '小明去开窗'
  let str3:string = '遇到一耳光'
  let str4:string = '牙齿掉光光'
  console.log(`${str1},${str2},${str3},${str4}`)
})()