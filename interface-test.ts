interface Person {
  // 只读属性
  readonly id: number,
  name: string,
  // 有时候我们喜欢不要完全匹配一个形状 ，那么可以使用可选属性？
  age ?: number,
  address: string
}

let tomni: Person = {
  id: 10,
  name: 'wenfu',
  address: 'china chengdu'
}

// tomni.id = 99