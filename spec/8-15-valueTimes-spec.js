'use strict';

const valueTimes = require('../script/8-15-valueTimes');

describe('统计数组 arr 中值等于 item 的元素出现的次数：', () => {

    it(' [1,3,7,1,4,]中1出现的次数', () => {
        const result = 2;
        const origin = [1, 3, 7, 1, 4, ];
        console.log(`数组 [1, 3, 7, 1 ,4,] 中值等于 2 出现的次数：2`);
        expect(valueTimes(origin, 1)).toEqual(result);
    });

    it(' [1,2,3,4,5,6]中6出现的次数', () => {
        const result = 1;
        const origin = [1,2,3,4,5,6];
        console.log(`数组 [1,2,3,4,5,6] 中值等于 6 的元素出现的次数：1`);
        expect(valueTimes(origin, 6)).toEqual(result);
    });

    it(' [1,2,3,4,5,6]中8出现的次数', () => {
        const result = 0;
        const origin = [1,2,3,4,5,6];
        console.log(`数组 [1,2,3,4,5,6] 中值等于 8 的元素出现的次数：0`);
        expect(valueTimes(origin, 8)).toEqual(result);
    });
});