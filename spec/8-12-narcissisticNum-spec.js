'use strict';

const narcissisticNum = require('../script/8-12-narcissisticNum');

describe('打印三位数中所有的水仙花数：', () => {

    it('三位数中所有的水仙花数为', () => {
        const result = [153, 370, 371, 407];
        console.log(`三位数中所有的水仙花数为 ${narcissisticNum().join()}`);
        expect(narcissisticNum()).toEqual(result);
    });
});