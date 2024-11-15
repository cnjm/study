/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(arr) {
  let num = 1000000000;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    element === 0 && (num += 1)
    element === 1 && (num += 1000)
    element === 2 && (num += 1000000)
  }
  arr.length = 0;
  for (let j = 0; j < num.toString().slice(7,10)/1; j++) {
    arr.push(0)
  }
  for (let j = 0; j < num.toString().slice(4,7)/1; j++) {
    arr.push(1)
  }
  for (let j = 0; j < num.toString().slice(1,4)/1; j++) {
    arr.push(2)
  }

};

// @lc code=end

