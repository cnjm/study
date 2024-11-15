// // class Person {
// //     constructor(public username: string) {}
// // }
// // class Student extends Person {

// // }

// // interface Point {
// //     // readonly x: number;
// //     // readonly y: number;
// //     // color?: number;
// //     [key: string]: Person;
// //     [key: number]: Student;
// // }

// // let p1: Point = {
// //     x: 100,
// //     y: 100
// // }
// // // let p2 = Point;
// // // p1.x = 200;

// // // p1.z = 100;
// // p1[0] = 100;






// // function fn1(x: number, y: number): number {
// //     return x + y;
// // }
// // function fn2(x: number, y: number): number {
// //     return x + y;
// // }


// interface IFunc {
//     (x: number, y: number): number
// }

// // let fn1: IFunc = function(a: number, b: number): number {
// //     return a + b;
// // }
// // let fn12: IFunc = function(a: number, b: number): number {
// //     return a + b;
// // }


// // function todo(callback: IFunc) {
// //     // ....
// //     let v = callback(1, 2);
// //     // 
// // }

// // todo( function(a: number, b: number): number {
// //     return a + b;
// // } )

// // interface IEventFunc {
// //     (e: MouseEvent): void
// // }


// // function on(el: HTMLElement, evname: string, callback: IEventFunc) {

// // }

// // let div = document.querySelector('div');
// // if (div) {
// //     on(div, 'click', function(e) {
// //         e.clientX
// //     });
// // }



// interface Box {
//     height: number;
//     width: number;
//     fn(a: string): string;
// }

// interface Box {
//     scale: number;
//     // width: string;
//     fn(a: number): number;
// }

// let box: Box = {
//     height: 5,
//     width: 6, 
//     scale: 10,
//     fn: function(a:any):any {
//         return a;
//     },
// }