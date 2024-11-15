const promiseFun = (bole = true) => {
  return new Promise((resolve, reject) => {
    console.log("promise");
    // throw "hh";
    if (bole) {
      resolve("resolve___");
    } else {
      reject("reject___");
    }
  });
};

const nFun = async function () {
  return new Promise((resolve, reject) => {
    promiseFun(false)
      .then(() => {
        // promiseFun(false).then((res) => {
        //   console.log(2222);
        // });
      })
      .catch((err) => {
        reject(err);
      });
  });
  // try {
  //   await promiseFun(false);
  // } catch (error) {
  //   console.log(error, "error222");
  //   return error;
  // }
};

const myFun = async function () {
  try {
    await nFun();
    console.log(111);
  } catch (error) {
    console.log(error, "error1");
  }
};

myFun();

// 1. try中{}作用域同样的，在{}外无法访问let const声明的变量
// 2. try catch 中抛出异常，不会阻塞try catch外的同步代码执行，但try中 throw后的代码会被阻塞
// 3.

// async function fn() {
//   throw Error("出错了");
// }
// try {
//   console.log("开始同步任务");
//   fn();
// } catch (error) {
//   console.log("try catch捕获同步错误", error);
// }
// console.log("结束同步任务");

// console.log("开始同步任务");
// Promise.reject(Error("出错了"));
// console.log("结束同步任务");

// new Promise((resolve, reject) => {
//   console.log("开始同步任务");
//   reject(Error("出错了"));
// })
//   .catch((e) => {
//     console.log("Promise catch捕获异步错误", e);
//   })
//   .then(() => {
//     console.log("继续同步任务");
//   });
// console.log("结束同步任务");

// try {
//   new Promise((resolve, reject) => {
//     console.log("开始同步任务");
//     reject(Error("出错了"));
//   })
//     .catch((e) => {
//       console.log("Promise catch捕获异步错误", e);
//     })
//     .then(() => {
//       console.log("继续同步任务");
//     });
// } catch (error) {
//   console.log("try catch捕获同步错误", error);
// }
// console.log("结束同步任务");
