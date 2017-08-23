'use strict';

const maxLength = require('../script/8-20-maxlength');

describe('求数组中出现次数最多的元素', () => {

  it("[1, 3, 'a' , 'a' , 7, 1, 4]数组中出现次数最多的元素为{'1':2, 'a':2}", () => {
    const result = {'1': 2, 'a': 2};
    const origin = '13aa714';
    console.log(`[1, 3, 'a' , 'a' , 7, 1, 4]数组中出现次数最多的元素为{'1':2, 'a':2}`);
    expect(maxLength(origin)).toEqual(result);
  });

  it("‘aaaaabbdbdbb’数组中出现次数最多的元素为{a：5, b：5}", () => {
    const result = {a: 5, b: 5};
    const origin = 'aaaaabbdbdbb';
    console.log(`‘aaaaabbdbdbb’数组中出现次数最多的元素为{a：5, b：5}`);
    expect(maxLength(origin)).toEqual(result);
  });

  it("'abcsbaddbizdbas'数组中出现次数最多的元素为{{b：4}}", () => {
    const result = {b: 4};
    const origin = 'abcsbaddbizdbas';
    console.log(`'abcsbaddbizdbas'数组中出现次数最多的元素为{b：4}`);
    expect(maxLength(origin)).toEqual(result);
  });
});