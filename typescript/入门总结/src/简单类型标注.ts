let str: string = "14321";
let str1: String = "14321";

// str = str1; // 报错 不能将类型“String”分配给类型“string”。 “string”是基元，但“String”是包装器对象。如可能首选使用“string”。
// str = new String("哈哈"); // 报错
str1 = str; // 可以

let num: number = 100;
let num1: Number = 200;
// number 和 Number同理

let isOk: boolean = true;
