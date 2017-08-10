'use strict';

const fib = require('../script/8-9-Fibonacci');

describe('查找斐波纳契数列中第n个数', () => {

  it('斐波拉契数列中的第 0 项：', () => {
    const result = 0;
    console.log(`fib(0) = ${fib(0)}`);
    expect(fib(0)).toEqual(result);
  });

  it('斐波拉契数列中的第 10 项：',() => {
    const result = 34;
    console.log(`fib(10) = ${fib(10)}`);
    expect(fib(10)).toEqual(result);
  });

  it('斐波拉契数列中的第 15 项：',() => {
    const result = 377;
    console.log(`fib(15) = ${fib(15)}`);
    expect(fib(15)).toEqual(result);
  });
});
