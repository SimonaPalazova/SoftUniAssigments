const { expect } = require('chai');
const rentCar = require('./rentCar');

describe('Test', function () {
    describe('searchCar', function () {
        it('finds one car', () => {
            const res = rentCar.searchCar(['a', 'b', 'c'], 'a');

            expect(res).to.equal('There is 1 car of model a in the catalog!')
        })

        it('finds two cars', () => {

            const res = rentCar.searchCar(['a', 'b', 'a'], 'a');

            expect(res).to.equal('There is 2 car of model a in the catalog!')
        })

        it('invaid shop (number)', () => {
            expect(() => {
                rentCar.searchCar(5, 'a')
            }).to.throw()
        })

        it('invalid shop (string)', () => {
            expect(() => {
                rentCar.searchCar('abc', 'a')
            }).to.throw()
        })

        it('invalid model', () => {
            expect(() => {
                rentCar.searchCar(['a', 'b', 'c'], 1)
            }).to.throw()
        })

        it('car not found', () => {
            expect(() => {
                rentCar.searchCar(['a', 'b', 'c'], 'd')
            }).to.throw()
        })
    })
    describe('calculatePriceOfCar', function(){
        it('invalid input model', () => {
            expect(() => {
                rentCar.calculatePriceOfCar(1, 1)
            }).to.throw()
        })
        it('invalid input days', () => {
            expect(() => {
                rentCar.calculatePriceOfCar('a', '1')
            }).to.throw()
        })

        it('finds one car', () => {
            const res = rentCar.calculatePriceOfCar('Volkswagen', 2);

            expect(res).to.equal('You choose Volkswagen and it will cost $40!')
        })

        it('No such model in the catalog!', () => {
            expect(() => {
                rentCar.calculatePriceOfCar('a', 1)
            }).to.throw()
        })


    })

    describe('checkBudget', function(){
        it('invalid input', () => {
            expect(() => {
                rentCar.checkBudget('a', 'b','c')
            }).to.throw()
        })
        it('invalid input', () => {
            expect(() => {
                rentCar.checkBudget('a', '1', 1)
            }).to.throw()
        })
        it('invalid input', () => {
            expect(() => {
                rentCar.checkBudget('a', 1, '1')
            }).to.throw()
        })
        it('invalid input', () => {
            expect(() => {
                rentCar.checkBudget(1, '1', '1')
            }).to.throw()
        })
        it('invalid input', () => {
            expect(() => {
                rentCar.checkBudget('a', 1, 1)
            }).to.throw()
        })
        it('invalid input', () => {
            expect(() => {
                rentCar.checkBudget(1, 1, '1')
            }).to.throw()
        })

        it('You rent a car!', () => {

            const res = rentCar.checkBudget(2, 1, 2);

            expect(res).to.equal('You rent a car!')
        })

        it('You rent a car!', () => {

            const res = rentCar.checkBudget(2, 1, 4);

            expect(res).to.equal('You rent a car!')
        })

        it('You need a bigger budget!', () => {

            const res = rentCar.checkBudget(4, 1, 2);

            expect(res).to.equal('You need a bigger budget!')
        })


    })
})