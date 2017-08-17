'use strict';

const repeatEle = require('../script/8-16-repeatEle');

describe('找出数组中重复出现过的元素', () => {

    it("['a', 'ab', 'ed', 'da', 'a', 'ed', 'b']中重复出现的元素为：'a', 'ed'", () => {
        const result = ['a', 'ed'];
        const origin = ['a', 'ab', 'ed', 'da', 'a', 'ed', 'b'];
        console.log(`['a', 'ab', 'ed', 'da', 'a', 'ed', 'b']中重复出现的元素为：'a', 'ed'"`);
        expect(repeatEle(origin)).toEqual(result);
    });

    it("['a','b','c','c','a','b']中重复出现的元素为：'a', 'b', 'c'", () => {
        const result = ['a', 'b', 'c'];
        const origin = ['a','b','c','c','a','b'];
        console.log(`['a','b','c','c','a','b']中重复出现的元素为：'a', 'b', 'c'`);
        expect(repeatEle(origin)).toEqual(result);
    });

    it("['a','b','c']中重复出现的元素为：", () => {
        const result = [];
        const origin = ['a','b','c'];
        console.log(`['a','b','c']中重复出现的元素为：`);
        expect(repeatEle(origin)).toEqual(result);
    });

    it("['a', 'a', 'a']中重复出现的元素为：'a'", () => {
        const result = ['a'];
        const origin = ['a', 'a', 'a'];
        console.log(`['a', 'a', 'a']中重复出现的元素为：'a'`);
        expect(repeatEle(origin)).toEqual(result);
    });
});