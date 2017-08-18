'use strict';

const findValIndex = require('../script/8-18-findValIndex');

describe('在数组中，查找值与item相等的元素出现的所有位置。', () => {

    it("[1, 3, 7, 1, 4]中元素1出现的位置为：[0,3]。", () => {
        const result = [0, 3];
        const origin = [1, 3, 7, 1, 4];
        console.log(`[1, 3, 7, 1, 4]中元素1出现的位置为：[0,3]`);
        expect(findValIndex(origin, 1)).toEqual(result);;
    });

    it("为[11, 2, 3, 5, 1]中元素1出现的位置为：-1", () => {
        const result = -1;
        const origin = [11, 2, 3, 5, 1];
        console.log(`[11, 2, 3, 5, 1]中元素10出现的位置为：-1`);
        expect(findValIndex(origin, 10)).toEqual(result);
    });

    it("为[1, 2, 3, 4, 5]中的每个元素求二次方。", () => {
        const result = [3];
        const origin = [1, 2, 3, 4, 5];
        console.log(`[1, 2, 3, 4, 5]元素4出现的位置为：[3]`);
        expect(findValIndex(origin, 4)).toEqual(result);
    });
});