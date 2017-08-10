'use strict';

const primeFactor = require('../script/8-8-primeFactorization');

describe('将正整数分解质因数', () => {

  it('将90分解质因数', () => {
    const result = '90=2335';
    console.log(primeFactor(90));
    expect(primeFactor(90)).toEqual(result);
  });

  it('将12分解质因数', () => {
    const result = '12=223';
    console.log(primeFactor(12));
    expect(primeFactor(12)).toEqual(result);
  });

  it('将25分解质因数', () => {
    const result = '25=55';
    console.log(primeFactor(25));
    expect(primeFactor(25)).toEqual(result);
  });
});