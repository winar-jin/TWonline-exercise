'use strict';

const intersectingArrayii = require('../script/8-22-ntersectingArrayii');

describe('计算两个数组的交数组', () => {

  it("nums1 = [1, 2, 2, 1], nums2 = [2, 2], 返回 [2, 2]", () => {
    const result = [2, 2];
    const origin1 = [1, 2, 2, 1];
    const origin2 = [2, 2];
    console.log(`nums1 = [1, 2, 2, 1], nums2 = [2, 2], 返回 [2, 2]`);
    expect(intersectingArrayii(origin1,origin2)).toEqual(result);
  });

  it("nums1 = [1,1,2,1,2,2], nums2 = [1,2,2], 返回 [1,2,2]", () => {
    const result = [1,2,2];
    const origin1 = [1,1,2,1,2,2];
    const origin2 = [1,2,2];
    console.log(`nums1 = [1,1,2,1,2,2], nums2 = [1,2,2], 返回 [1,2,2]`);
    expect(intersectingArrayii(origin1,origin2)).toEqual(result);
  });

  it("nums1 = [1,1,2,1,2,2], nums2 = [3,4,5], 返回 []", () => {
    const result = [];
    const origin1 = [1,1,2,1,2,2];
    const origin2 = [3,4,5];
    console.log(`nums1 = [1,1,2,1,2,2], nums2 = [3,4,5], 返回 []`);
    expect(intersectingArrayii(origin1,origin2)).toEqual(result);
  });
});