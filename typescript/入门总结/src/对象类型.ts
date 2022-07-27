// 内置对象类型
let a: object = {};
// 数组则需要指定元素类型
let arr: Array<number> = [1, 2, 3];
let d1: Date = new Date();

// 字面量标注
let g: { username: string; age: number } = {
  username: "zMouse",
  age: 35,
};

// 接口
interface Person {
  username: string;
  age: number;
}
let f: Person = {
  username: "小明",
  age: 35,
};
