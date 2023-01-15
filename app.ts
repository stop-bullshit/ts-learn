let str: string = 'TS'
let muban: string = 'web ${str}'
console.log(muban);


let num: number = 123
console.log(num);

let b: boolean = true
console.log(b);
let b1: boolean = Boolean(1)
console.log(b1);


let u: void = undefined//void 不可以复制  undefine 可以赋值
let u1: void = null

console.log(u);
console.log(u1);


let anys: any = "heloo"
console.log(anys);

anys = 18
console.log(anys);
anys = true
console.log(anys);
anys = {}
console.log(anys);

anys = []
console.log(anys);


// let a: object = 123//原始类型
// let a1: object = '123'//原始类型
// let a2: object = false//原始类型
let a3: object = []
let a4: object = {}
let a5: object = () => {
}

//js
// let obj = {
//     name: 'hello'
// }

//ts
interface A {
    name: string

}

interface A {
    age: number
}

let obj: A = {
    name: 'hello',
    age: 25
}

console.log(obj)


interface Person {
    name: string,

    //只读属性
    readonly sex: string
    //可选属性
    age?: number,

    ask(): number


    //可以在对象中定义任意属性,例如传值传过来的时候 有一些其他属性
    // [propName: string]: any
    //string 或 number属性
    [propName: string]: any,


}

let p: Person = {
    name: '张三',
    sex: 'M',
    ask(): number {
        return 1024
    }
}
//只读
// p.sex='hello'


interface B extends A {
    back: boolean
}

let bobj: B = {
    back: false,
    name: "",
    age: 0
}

//数组

let arr: number[] = [1, 2, 3]
let arr2: string[] = ['1', '2', '3']
let arr3: any[] = [1, true, '2', '3']
console.log(arr);
console.log(arr2);
console.log(arr3);

//泛型  更直观
let arr4: Array<number> = [1, 23, 43]
console.log(arr4)


function Arr(...args: any): void {
    console.log(arguments)
    let arr: IArguments = arguments
}

Arr(4, 5, 6)


//函数
console.log("***************************函数")
const fn = function (name: string, age?: number) {
    return name + age
}

let fa = fn("zhangsan", 30)
//不传默认 undefined
let fb = fn("zhangsan")
console.log(fa)
console.log(fb)


// 类型
console.log("***************************类型")

let typeFn = function (type: number | boolean): boolean {
    return !!type
}


console.log(typeFn(0))
console.log(typeFn(1))
console.log(typeFn(true))


interface People {
    name: string
    age: number
}

interface Man {
    sex: number
}

const xiaoman = (man: People & Man): void => {
    console.log("Line:[165] \t ", man)
}

xiaoman({
    name: "小满",
    age: 24,
    sex: 1
})


//断言
//基本类型
let assertFn = function (num: string | number): void {
    //欺骗ts 的类型判断 因为number 没有length
    console.log("Line:[177] \t ", (num as string).length)
}
assertFn("123456")
assertFn(123456)//undefined

//接口

interface assertA {
    run: string
}

interface assertB {
    build: string
}

let assertInterfaceFn = (type: assertA | assertB): void => {
    console.log("Line:[195] \t ", (<assertA>type).run)
    // console.log("Line:[196] \t ", (type as assertA).run)
}

assertInterfaceFn({
    build: "123"
})
assertInterfaceFn({
    run: "run 123"
})

console.log("***************************内置对象")

const regexp: RegExp = /\w\d\s/

const date: Date = new Date()


// const list: NodeList = document.querySelectorAll('#list li')
// console.log("Line:[214] \t ", list)


// const body: HTMLElement = document.body
// console.log("Line:[218] \t ", body)


function promise() {
    return new Promise<number>((resolve) => {
        resolve(1)
    }).then(value => {
        console.log("Line:[225] \t ", value)
    })
}


console.log("***************************类")

class ClassPerson {
    name: string
    sub: boolean
    age: number

    constructor(name: string, sub: boolean, age: number) {
        this.name = name;
        this.sub = sub;
        this.age = age;
    }

}

const person1 = new ClassPerson("哈哈", false, 25)
console.log("Line:[248] \t ", person1)


console.log("*************************** 元组")

let arr253: [string, number] = ["hello", 1]
arr253.push("hello")
arr253.push(255)
console.log("Line:[256] \t ", arr253)


console.log("*************************** 枚举")

/**
 * 枚举 默认是枚举值是数字 然后递增  可以自定义
 */
enum Color {
    RED = '#ff0000',
    GREEN = '#00ff00',
    BLUE = '#0000ff',
    YELLOW = '#fff000'
}

console.log("Line:[266] \t ", Color.RED)
console.log("Line:[266] \t ", Color.GREEN)
console.log("Line:[266] \t ", Color.BLUE)


// const 枚举
const enum Types {
    success,
    fail
}


let code: number = 0
if (code == Types.success) {

}

// 不使用const的枚举 编译时 会编译成一个对象  const 会编译出值


console.log("*************************** Symbol 类型")


let s: symbol = Symbol('二蛋')
let symbolNum = Symbol('二蛋')

console.log("Line:[295] \t ", s == symbolNum)
console.log("Line:[296] \t ", s === symbolNum)


let symbolObj = {
    [symbolNum]: 'value',
    [s]: '草莓',
    name: 'xiaoman',
    sex: 0
}


for (const symbolObjKey in symbolObj) {
    console.log("Line:[308] \t ", symbolObjKey)
}


console.log("*************************** 泛型")


function simpleNum(a: number, b: number): Array<number> {
    return [a, b]
}

simpleNum(1, 2)

function simpleStr(a: string, b: string): Array<string> {
    return [a, b]
}

simpleStr('hello', 'world')


//使用泛型  单个类型的泛型

function singleGenericFn<T>(a: T, b: T): Array<T> {
    return [a, b]
}

singleGenericFn(1, 2)
singleGenericFn('hello', 'world')


//多个类型的泛型

function multiGenericFn<T, U>(a: T, b: U): Array<T | U> {
    let arr: Array<T | U> = [a, b]
    return arr;
}


multiGenericFn(1, false)


//泛型约束


// function constraintGenericFn<T>(arg: T) {
//     return arg.length;//泛型没有length属性

interface Len {
    length: number
}

//参数必须有length属性
function constraintGenericFn<T extends Len>(arg: T) {
    return arg.length;//泛型没有length属性
}


console.log("Line:[365] \t ", constraintGenericFn([1, 2, 3]))

console.log("Line:[366] \t ", constraintGenericFn('hello'))

console.log("*************************** keyof 约束泛型")


// 使用keyof获取所有的键,返回的是联合类型,然后使用extends关键词约束K的类型必须为联合类型
function prop<T, K extends keyof T>(obj: T, key: K) {

    return obj[key]
}

let o = {a: '1', b: '2', c: '3'}

prop(o, 'a')


// prop(o, 'd')

console.log("*************************** 泛型类")

class Sub<T> {
    attr: T[] = [];

    add(a: T): T[] {
        return [a]
    }
}

let sub = new Sub<number>()
sub.attr = [1, 2, 1]
sub.add(213)


console.log("*************************** namespace")
namespace A {
    export const a = 2

}
console.log("Line:[405] \t ", A.a)
namespace B {
    export const a: number = 2
}

console.log("Line:[410] \t ", B.a)
