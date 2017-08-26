'use strict';

const leftpad = require('../script/8-24-leftpad');

describe('left-pad函数(将字符串前面拼指定字符到固定长度)', () => {

  it("leftpad(‘hello’,20,‘1’)，就要返回’111111111111111hello’", () => {
    const result = '111111111111111hello';
    const origin = 'hello';
    console.log(`leftpad(‘hello’,20,‘1’)，就要返回’111111111111111hello’`);
    expect(leftpad(origin,20,'1')).toEqual(result);
  });

  it("leftpad(‘hello’,20,‘1234’)，就要返回’111111111111111hello’", () => {
    const result = '111111111111111hello';
    const origin = 'hello';
    console.log(`leftpad(‘hello’,20,‘1234’)，就要返回’111111111111111hello’`);
    expect(leftpad(origin,20,'1234')).toEqual(result);
  });

  it("leftpad(‘hello’,3,‘1’)，就要返回’llo’", () => {
    const result = 'llo';
    const origin = 'hello';
    console.log(`leftpad(‘hello’,3,‘1’)，就要返回’llo’`);
    expect(leftpad(origin,3,'1')).toEqual(result);
  });
});