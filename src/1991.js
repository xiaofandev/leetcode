/**
 * @param {number[]} nums
 * @return {number}
 */
const findMiddleIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let sumLeft = 0,
      sumRight = 0;
    for (let j = 0; j < i; j++) {
      sumLeft += nums[j];
    }
    for (let k = i + 1; k < nums.length; k++) {
      sumRight += nums[k];
    }
    if (sumLeft == sumRight) {
      return i;
    }
  }
  return -1;
};

export default findMiddleIndex;
