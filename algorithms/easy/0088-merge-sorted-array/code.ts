/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    const currentM = nums1[i];
    const currentN = nums2[j];
    if (i >= 0 && currentM >= currentN) {
      nums1[k] = currentM;
      i--;
    } else {
      nums1[k] = currentN;
      j--;
    }
    k--;
  }
}
