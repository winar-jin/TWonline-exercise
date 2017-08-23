'use strict';

const arrayDeReapeat = require('../script/8-19-arrayDeReapeat');

describe('数组去重', () => {

  it("[1, 3, 'a' , 'a' , 7, 1, 4]数组去重后为：[1, 3, 'a' , 7 , 4]", () => {
    const result = [1, 3, 'a' , 7 , 4];
    const origin = [1, 3, 'a' , 'a' , 7, 1, 4];
    console.log(`[1, 3, 'a' , 'a' , 7, 1, 4]数组去重后为：[1, 3, 'a' , 7 , 4]`);
    expect(arrayDeReapeat(origin)).toEqual(result);
  });

  it("[1, 2, 1, 2, 3, 4, 5]数组去重后为：[1, 2, 3, 4, 5]", () => {
    const result = [1, 2, 3, 4, 5];
    const origin = [1, 2, 1, 2, 3, 4, 5];
    console.log(`[1, 2, 1, 2, 3, 4, 5]数组去重后为：[1, 2, 3, 4, 5]`);
    expect(arrayDeReapeat(origin)).toEqual(result);
  });
});