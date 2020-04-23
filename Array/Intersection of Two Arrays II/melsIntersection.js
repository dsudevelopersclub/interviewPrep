/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let result = [];
   
    let smallerArr = nums1 > nums2 ? nums2 : nums1;
    let biggerArr = nums1 <= nums2 ? nums2 : nums1;
    
    for(let i = 0; i < smallerArr.length; i++) {
        let elem = smallerArr[i];
        let index = biggerArr.indexOf(elem);
        if(index > -1) {
            result.push(elem);
            biggerArr.splice(index, 1);
        }
    }
    
    return result;
};