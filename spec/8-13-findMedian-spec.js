'use strict';

const findMedian = require('../script/8-13-findMedian');

describe('根据给定的数组找到其中的中位数：', () => {

    it('[1,2,3,4,5,6]', () => {
        const result = 3.5;
        const origin = [1,2,3,4,5,6];
        console.log(`[1,2,3,4,5,6]的中位数为3.5`);
        expect(findMedian(origin)).toEqual(result);
    });

    it('[3,89,2,1,0]', () => {
        const result = 2;
        const origin = [3,89,2,1,0];
        console.log(`[3,89,2,1,0]的中位数为2`);
        expect(findMedian(origin)).toEqual(result);
    });

    it('[0,0,0,0,0,0]', () => {
        const result = 0;
        const origin = [0,0,0,0,0,0];
        console.log(`[0,0,0,0,0,0]的中位数为0`);
        expect(findMedian(origin)).toEqual(result);
    });

    it('[12,23,45,34,21]', () => {
        const result = 23;
        const origin = [12,23,45,34,21];
        console.log(`[12,23,45,34,21]的中位数为23`);
        expect(findMedian(origin)).toEqual(result);
    });
});