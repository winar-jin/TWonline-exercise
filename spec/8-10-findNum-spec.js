'use strict';

const findNum = require('../script/8-10-findNum');

describe('查找数组中唯一出现的数字', () => {

    it('[1,3,1,3,5]：', () => {
        const result = 5;
        const origin = [1, 3, 1, 3, 5];
        console.log(`findNum([1,3,1,3,5]) = ${findNum(origin)}`);
        expect(findNum(origin)).toEqual(result);
    });
    it('[2,2,4,1,6,7,6,7,4]：', () => {
        const result = 1;
        const origin = [2,2,4,1,6,7,6,7,4];
        console.log(`findNum([2,2,4,1,6,7,6,7,4]) = ${findNum(origin)}`);
        expect(findNum(origin)).toEqual(result);
    });
    it('[0,1,2,1,0]：', () => {
        const result = 2;
        const origin = [0,1,2,1,0];
        console.log(`findNum([0,1,2,1,0]) = ${findNum(origin)}`);
        expect(findNum(origin)).toEqual(result);
    });
    it('[1,2,3,4,3,2,1]：', () => {
        const result = 4;
        const origin = [1,2,3,4,3,2,1];
        console.log(`findNum([1,2,3,4,3,2,1]) = ${findNum(origin)}`);
        expect(findNum(origin)).toEqual(result);
    });
});