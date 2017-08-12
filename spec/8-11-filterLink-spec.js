'use strict';

const filterLink = require('../script/8-11-filterLink');

describe('返回筛选之后的链表', () => {

    it('\'1->2->3->3->4->5->3\'中筛选出3之后的链表', () => {
        const result = '1->2->4->5';
        const origin = '1->2->3->3->4->5->3';
        console.log(`filterLink('1->2->3->3->4->5->3')，筛选出3 => ${filterLink(origin,3)}`);
        expect(filterLink(origin,3)).toEqual(result);
    });
    it('\'2->4->4->1->0->1\'中筛选出4之后的链表', () => {
        const result = '2->1->0->1';
        const origin = '2->4->4->1->0->1';
        console.log(`filterLink('2->4->4->1->0->1') ，筛选出4 => ${filterLink(origin,4)}`);
        expect(filterLink(origin,4)).toEqual(result);
    });
    it('\'0->0->0->0->0\'中筛选出0之后的链表', () => {
        const result = '';
        const origin = '0->0->0->0->0';
        console.log(`filterLink('0->0->0->0->0')，筛选出0  => ${filterLink(origin,0)}`);
        expect(filterLink(origin,0)).toEqual(result);
    });
    it('\'1->2->3->4->5\'中筛选出2之后的链表', () => {
        const result = '1->3->4->5';
        const origin = '1->2->3->4->5';
        console.log(`filterLink('1->2->3->4->5')，筛选出2  => ${filterLink(origin,2)}`);
        expect(filterLink(origin,2)).toEqual(result);
    });
});