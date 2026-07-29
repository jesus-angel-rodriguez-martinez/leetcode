/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let insertPtr = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPtr] = nums[i];
      insertPtr++;
    }
  }

  while (insertPtr < nums.length) {
    nums[insertPtr] = 0;
    insertPtr++;
  }
}
