'use strict';

const fizzBuzz = require('../script/8-26-fizzBuzz');

describe('给你一个整数n. 从 1 到 n 按照下面的规则打印每个数', () => {

  it("n=5，按照规则打印。", () => {
    const result = `fizz buzz`;
    console.log(`n=5，按照规则打印。`);
    expect(fizzBuzz(5)).toEqual(result);
  });

  it("n=15，按照规则打印。", () => {
    const result = `fizz buzz fizz fizz buzz fizz fizz buzz`;
    console.log(`n=15，按照规则打印。`);
    expect(fizzBuzz(15)).toEqual(result);
  });
});