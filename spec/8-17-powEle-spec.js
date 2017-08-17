'use strict';

const powEle = require('../script/8-17-powEle');

describe('为数组中的每个元素求二次方。', () => {

    it("为[11, 2, 3, 5, 1]中的每个元素求二次方。", () => {
        const result = [121, 4, 9, 25, 1];
        const origin = [11, 2, 3, 5, 1];
        console.log(`[11, 2, 3, 5, 1]中每个元素求完二次方之后的结果为：[121, 4, 9, 25, 1]`);
        expect(powEle(origin)).toEqual(result);
    });

    it("为[1, 2, 3, 4, 5]中的每个元素求二次方。", () => {
        const result = [1, 4, 9, 16, 25];
        const origin = [1, 2, 3, 4, 5];
        console.log(`[1, 2, 3, 4, 5]中每个元素求完二次方之后的结果为：[1, 4, 9, 16, 25]`);
        expect(powEle(origin)).toEqual(result);
    });
});