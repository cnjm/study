/*
 * @Description: 这是**页面（组件）
 * @Date: 2023-03-22 09:50:45
 * @Author: chenjiaming
 * @LastEditors: chenjiaming
 * @LastEditTime: 2023-03-22 11:20:22
 */
/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let len = nums1.length + nums2.length;
  let use1 = 0;
  let use2 = 0;
  let temp1 = null;
  let temp2 = null;

  for (let i = 0; i < len; i++) {
    if (i > len / 2) {
      break;
    }
    temp1 = temp2;
    if (use1 >= nums1.length) {
      temp2 = nums2[use2];
      use2++;
    } else if (use2 >= nums2.length) {
      temp2 = nums1[use1];
      use1++;
    } else {
      if (nums1[use1] <= nums2[use2]) {
        temp2 = nums1[use1];
        use1++;
      } else {
        temp2 = nums2[use2];
        use2++;
      }
    }
  }
  // 非零
  if (len % 2 || len === 1) {
    return temp2;
  } else {
    return (temp1 + temp2) / 2;
  }
};
// @lc code=end
