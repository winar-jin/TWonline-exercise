module.exports = function (nums1, nums2) {
  const [longArr,shortArr] = nums1.length > nums2.length ? [nums1, nums2] : [nums2, nums1];
  const result = [];
  shortArr.forEach(ele => {
    if (longArr.some(val => val === ele)) {
     result.push(ele);
    }
  });
  return result;
}