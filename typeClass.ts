class Person {
    run() {
        throw new Error("Method not implemented.");
    }
    private firstName: any;
    constructor(firstName) {
        this.firstName = firstName
    }
    // typescript 只读属性
    readonly num = 10
    // 修饰私有属性 private 修饰共有属性 public
    public sayName () {
        console.log('你好温福')
    }
    // 修饰受保护的属性和方法 只能在 Person子类才能调用方法
    protected hiSon () {
        console.log('你好'+ this.firstName)
    }
    say () {
        console.log(`你好${this.num}`)
        this.sayName()
    }
}

let wenfu = new Person('tan')
wenfu.say()
wenfu.sayName()
// wenfu.hiSon() // 会报错 只能在 Person 的子类中调用哦

class Son extends Person {
    constructor(firstName) {
        super(firstName);
    }
    public run () {
        console.log('nihao起来')
        this.hiSon()
    }
}

let xm = new Son('xiaominghahah')
xm.run()
