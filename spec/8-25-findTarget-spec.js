'use strict';

const findTarget = require('../script/8-25-findTarget');

describe('将数组中所包含的某个元素找出，并放在数组后面', () => {

  it("给出 nums = [0, 1, 0, 3, 12], target = 0; 调用函数之后, 得到nums = [1, 3, 12, 0, 0].", () => {
    const result = [1, 3, 12, 0, 0];
    const origin = [0, 1, 0, 3, 12];
    console.log(`给出 nums = [0, 1, 0, 3, 12], target = 0; 调用函数之后, 得到nums = [1, 3, 12, 0, 0].`);
    expect(findTarget(origin,0)).toEqual(result);
  });
});