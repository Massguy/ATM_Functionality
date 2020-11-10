const {expect} = require('chai');
const { describe } = require('mocha');
const {vaultex} = require('../app')

describe('The vaultex function',()=>{
    it('should return error if cassetes greater than 4', () => {
        const result = vaultex(5,0,0,0,0)
        expect(result).to.be.eql(['error, Only Allowed 4 cassetes maximum'])
    });
    it('should return error if cassetes input not number', () => {
        const result = vaultex('4',0,0,0,0)
        expect(result).to.be.eql( ['error','please choose as an integer as cassetes input'])
    });
    it('should return error if all cassetes not filled in', () => {
        const result = vaultex(2,0,0,0,0)
        expect(result).to.be.eql(['error',`you have not filled in 2 cassetes you need`])
    });
    it('should return error if number not available in £5 notes', () => {
        const result = vaultex(1,2399,0,0,0)
        expect(result).to.be.eql(['error','Value not compatible for £5 notes choose a number divisible by 5'])
    });
    it('should return valid order if order valid for £5 notes', () => {
        const result = vaultex(1,10000,0,0,0)
        expect(result).to.be.eql( ["valid", "order valid, send for packing"])
    });
    it('should return error if value greater than £40000 for £5 notes', () => {
        const result = vaultex(4,41000,0,0,0)
        expect(result).to.be.eql( ['error', 'Exceeded Maximum you are only allowed £5 notes with a maximum value of £40000 '])
    });
    it('should return error if fives input not number', () => {
        const result = vaultex(4,'41000',0,0,0)
        expect(result).to.be.eql( ['error','please choose an integer as input'])
    });
  
    it('should return error if number not available in £10 notes', () => {
        const result = vaultex(1,0,19999,0,0)
        expect(result).to.be.eql(['error','Value not compatible for £10 notes choose a number divisible by 10'])
    });
    it('should return valid order if order valid for £10 notes', () => {
        const result = vaultex(3,0,55000,0,0)
        expect(result).to.be.eql( ["valid", "order valid, send for packing"])
    });
    it('should return error if value greater than £80000 for £10 notes', () => {
        const result = vaultex(4,0,90000,0,0)
        expect(result).to.be.eql( ['error', 'Exceeded Maximum you are only allowed £10 notes with a maximum value of £80000 '])
    });
    it('should return error if tens input not number', () => {
        const result = vaultex(4,0,'60000',0,0)
        expect(result).to.be.eql( ['error','please choose an integer as input'])
    });
    it('should return error if number not available in £20 notes', () => {
        const result = vaultex(1,0,0,39999,0)
        expect(result).to.be.eql(['error','Value not compatible for £20 notes choose a number divisible by 20'])
    });
    it('should return valid order if order valid for £20 notes', () => {
        const result = vaultex(3,0,0,90000,0)
        expect(result).to.be.eql( ["valid", "order valid, send for packing"])
    });
    it('should return error if value greater than £160000 for £20 notes', () => {
        const result = vaultex(4,0,0,170000,0)
        expect(result).to.be.eql( ['error', 'Exceeded Maximum you are only allowed £20 notes with a maximum value of £160000 '])
    });
    it('should return error if twenty input not number', () => {
        const result = vaultex(4,0,0,'100000',0)
        expect(result).to.be.eql( ['error','please choose an integer as input'])
    });
    it('should return error if number not available in £50 notes', () => {
        const result = vaultex(1,0,0,0,131111)
        expect(result).to.be.eql(['error','Value not compatible for £50 notes choose a number divisible by 50'])
    });
    it('should return valid order if order valid for £50 notes', () => {
        const result = vaultex(2,0,0,0,200000)
        expect(result).to.be.eql( ["valid", "order valid, send for packing"])
    });
    it('should return error if value greater than £400000 for £50 notes', () => {
        const result = vaultex(4,0,0,0,500000)
        expect(result).to.be.eql( ['error', 'Exceeded Maximum you are only allowed £50 notes with a maximum value of £400000 '])
    });
    it('should return error if fifty input not number', () => {
        const result = vaultex(4,0,0,0,'350000')
        expect(result).to.be.eql( ['error','please choose an integer as input'])
    });
    it('should return valid if multiple currencies chosen', () => {
        const result = vaultex(4,10000,20000,40000,50000)
        expect(result).to.be.eql( ["valid", "order valid, send for packing"])
    });
})