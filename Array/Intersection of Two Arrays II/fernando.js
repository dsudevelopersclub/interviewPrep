/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let small = nums1.length > nums2.length ? nums2 : nums1;
  let big = nums1.length > nums2.length ? nums1 : nums2;
  let dict = {};
  let result = [];
    
  for (let index of small) {
    if (dict[index] === undefined)
      dict[index] = 0;
    dict[index]++; 
  }
  
  for (let index of big) {
    if (dict[index] !== undefined) {
      result.push(index);
      dict[index]--;
      if (dict[index] <= 0)
        delete dict[index];
    }
  }
  
  return result;
};
