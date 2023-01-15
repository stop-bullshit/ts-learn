"use strict";
let str = 'TS';
let muban = 'web ${str}';
console.log(muban);
let num = 123;
console.log(num);
let b = true;
console.log(b);
let b1 = Boolean(1);
console.log(b1);
let u = undefined; //void 不可以复制  undefine 可以赋值
let u1 = null;
console.log(u);
console.log(u1);
let anys = "heloo";
console.log(anys);
anys = 18;
console.log(anys);
anys = true;
console.log(anys);
anys = {};
console.log(anys);
anys = [];
console.log(anys);
// let a: object = 123//原始类型
// let a1: object = '123'//原始类型
// let a2: object = false//原始类型
let a3 = [];
let a4 = {};
let a5 = () => {
};
let obj = {
    name: 'hello',
    age: 25
};
console.log(obj);
let p = {
    name: '张三',
    sex: 'M',
    ask() {
        return 1024;
    }
};
let bobj = {
    back: false,
    name: "",
    age: 0
};
//数组
let arr = [1, 2, 3];
let arr2 = ['1', '2', '3'];
let arr3 = [1, true, '2', '3'];
console.log(arr);
console.log(arr2);
console.log(arr3);
//泛型  更直观
let arr4 = [1, 23, 43];
console.log(arr4);
function Arr(...args) {
    console.log(arguments);
    let arr = arguments;
}
Arr(4, 5, 6);
//函数
console.log("***************************函数");
const fn = function (name, age) {
    return name + age;
};
let fa = fn("zhangsan", 30);
//不传默认 undefined
let fb = fn("zhangsan");
console.log(fa);
console.log(fb);
// 类型
console.log("***************************类型");
let typeFn = function (type) {
    return !!type;
};
console.log(typeFn(0));
console.log(typeFn(1));
console.log(typeFn(true));
const xiaoman = (man) => {
    console.log("Line:[165] \t ", man);
};
xiaoman({
    name: "小满",
    age: 24,
    sex: 1
});
//断言
//基本类型
let assertFn = function (num) {
    //欺骗ts 的类型判断 因为number 没有length
    console.log("Line:[177] \t ", num.length);
};
assertFn("123456");
assertFn(123456); //undefined
let assertInterfaceFn = (type) => {
    console.log("Line:[195] \t ", type.run);
    // console.log("Line:[196] \t ", (type as assertA).run)
};
assertInterfaceFn({
    build: "123"
});
assertInterfaceFn({
    run: "run 123"
});
console.log("***************************内置对象");
const regexp = /\w\d\s/;
const date = new Date();
// const list: NodeList = document.querySelectorAll('#list li')
// console.log("Line:[214] \t ", list)
// const body: HTMLElement = document.body
// console.log("Line:[218] \t ", body)
function promise() {
    return new Promise((resolve) => {
        resolve(1);
    }).then(value => {
        console.log("Line:[225] \t ", value);
    });
}
console.log("***************************类");
class ClassPerson {
    constructor(name, sub, age) {
        this.name = name;
        this.sub = sub;
        this.age = age;
    }
}
const person1 = new ClassPerson("哈哈", false, 25);
console.log("Line:[248] \t ", person1);
console.log("*************************** 元组");
let arr253 = ["hello", 1];
arr253.push("hello");
arr253.push(255);
console.log("Line:[256] \t ", arr253);
console.log("*************************** 枚举");
/**
 * 枚举 默认是枚举值是数字 然后递增  可以自定义
 */
var Color;
(function (Color) {
    Color["RED"] = "#ff0000";
    Color["GREEN"] = "#00ff00";
    Color["BLUE"] = "#0000ff";
    Color["YELLOW"] = "#fff000";
})(Color || (Color = {}));
console.log("Line:[266] \t ", Color.RED);
console.log("Line:[266] \t ", Color.GREEN);
console.log("Line:[266] \t ", Color.BLUE);
let code = 0;
if (code == 0 /* Types.success */) {
}
// 不使用const的枚举 编译时 会编译成一个对象  const 会编译出值
console.log("*************************** Symbol 类型");
let s = Symbol('二蛋');
let symbolNum = Symbol('二蛋');
console.log("Line:[295] \t ", s == symbolNum);
console.log("Line:[296] \t ", s === symbolNum);
let symbolObj = {
    [symbolNum]: 'value',
    [s]: '草莓',
    name: 'xiaoman',
    sex: 0
};
for (const symbolObjKey in symbolObj) {
    console.log("Line:[308] \t ", symbolObjKey);
}
console.log("*************************** 泛型");
function simpleNum(a, b) {
    return [a, b];
}
simpleNum(1, 2);
function simpleStr(a, b) {
    return [a, b];
}
simpleStr('hello', 'world');
//使用泛型  单个类型的泛型
function singleGenericFn(a, b) {
    return [a, b];
}
singleGenericFn(1, 2);
singleGenericFn('hello', 'world');
//多个类型的泛型
function multiGenericFn(a, b) {
    let arr = [a, b];
    return arr;
}
multiGenericFn(1, false);
//参数必须有length属性
function constraintGenericFn(arg) {
    return arg.length; //泛型没有length属性
}
console.log("Line:[365] \t ", constraintGenericFn([1, 2, 3]));
console.log("Line:[366] \t ", constraintGenericFn('hello'));
console.log("*************************** keyof 约束泛型");
// 使用keyof获取所有的键,返回的是联合类型,然后使用extends关键词约束K的类型必须为联合类型
function prop(obj, key) {
    return obj[key];
}
let o = { a: '1', b: '2', c: '3' };
prop(o, 'a');
// prop(o, 'd')
console.log("*************************** 泛型类");
class Sub {
    constructor() {
        this.attr = [];
    }
    add(a) {
        return [a];
    }
}
let sub = new Sub();
sub.attr = [1, 2, 1];
sub.add(213);
console.log("*************************** namespace");
var A;
(function (A) {
    A.a = 2;
})(A || (A = {}));
console.log("Line:[405] \t ", A.a);
var B;
(function (B) {
    B.a = 2;
})(B || (B = {}));
console.log("Line:[410] \t ", B.a);
