// 05_readonly修饰符:首先是一个关键字,对类中的属性成员进行修饰,修饰符后,该属性成员,就不能再外部被随意的修改了
// 构造函数中,可以对只读的属性成员的数据进行修改
(()=>{
  // 定义一个类型
  class Person{
    // 属性
    readonly name:string='大甜甜'
    // 构造函数
    constructor(name:string) {
      // this.name = name
    }
    sayHi() {
      console.log('考尼奇瓦',this.name)
      // 类中的普通方法中,也是不能修改readonly修饰的成员属性值
      // this.name = '大甜甜'
    }
  }
  // 实例化对象
  const person : Person = new Person('小甜甜')

  console.log(person)
  console.log(person.name)
  // 此时无法修改,因为name属性是只读的

  // person.name = '大甜甜'
  // console.log(person.name)
})()