'use strict';

const decode = require('../script/8-27-decode');

describe('根据编码规则，将给出的一个整数,返回解码方法的种数。', () => {

  it("若该整数是12，有2种解码方式。", () => {
    const result = 2;
    const origin = 12;
    console.log(`若该整数是12，有2种解码方式。`);
    expect(decode(origin)).toEqual(result);
  });

  it("若该整数是9，有1种解码方式。", () => {
    const result = 1;
    const origin = 9;
    console.log(`若该整数是9，有1种解码方式。`);
    expect(decode(origin)).toEqual(result);
  });

  it("若该整数是10，有2种解码方式。", () => {
    const result = 2;
    const origin = 10;
    console.log(`若该整数是10，有2种解码方式。`);
    expect(decode(origin)).toEqual(result);
  });

  it("若该整数是26，有2种解码方式。", () => {
    const result = 2;
    const origin = 26;
    console.log(`若该整数是26，有2种解码方式。`);
    expect(decode(origin)).toEqual(result);
  });
});