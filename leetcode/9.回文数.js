/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let s = x.toString();
  let t = true;
  for (let i = 0; i < s.length; i++) {
    if(s[i]!==s[s.length - 1 - i]){
      t = false;
      break;
    }
  }
  return t;

};
// @lc code=end

