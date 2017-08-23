'use strict';

const expandArr = require('../script/8-23-expandArr');

describe('给定一个数组，该数组中的每个元素要么是个数组，要么是整数。将其变成一个只包含整数的简单数组。', () => {

  it("给定 [1,2,[1,2]]，返回 [1,2,1,2]。", () => {
    const result = [1,2,1,2];
    const origin = [1,2,[1,2]];
    console.log(`给定 [1,2,[1,2]]，返回 [1,2,1,2]。`);
    expect(expandArr(origin)).toEqual(result);
  });

  it("给定 [1,2,[1,2],[3,4]]，返回 [1,2,1,2,3,4]。", () => {
    const result = [1,2,1,2,3,4];
    const origin = [1,2,[1,2],[3,4]];
    console.log(`给定 [1,2,[1,2],[3,4]]，返回 [1,2,1,2,3,4]。`);
    expect(expandArr(origin)).toEqual(result);
  });

  it("给定 [4,[3,[2,[1]]]]，返回 [4,3,2,1]。", () => {
    const result = [4,3,2,1];
    const origin = [4,[3,[2,[1]]]];
    console.log(`给定 [4,[3,[2,[1]]]]，返回 [4,3,2,1]。`);
    expect(expandArr(origin)).toEqual(result);
  });
});