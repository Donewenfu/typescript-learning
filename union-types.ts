// 联合类型
let numberString: number | string
// 当typescript 不确定一个联合类型的变量到底是那个的类型的时候，我们只能访问此联合类型的所有类型里共有的属性和方法
// numberString.length
// numberString.toString()

// 断言判断 这里我们可以用 as 关键字 ,告诉typescript 编译器，你没办法判断我的代码，但我本人很清楚，
// 这里我可以把这个类型看做成string ，就可以使用string 的方法
function getLength (input: number | string):number {
    const str = input as string
    if (str.length) {
        return str.length
    } else {
        const number = input as string
        return number.toString().length
    }
}
// 类型守卫 typescript
// 联合类型 ｜ 使用 竖线表示
function getLength2(input: number | string): number {
    if (typeof input === 'string') {
        return input.length
    } else {
        return  input.toString().length
    }
}


