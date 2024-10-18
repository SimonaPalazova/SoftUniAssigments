const { expect } = require('chai');
const findApartment = require('./findApartment');

describe('Test', function (){
    describe('isGoodLocation', function(){
        it('Invalid input!', () => {
            assert.throw(() => findNewApartment.isGoodLocation(1, true), 'Invalid input!')
        })
        it('Invalid input!', () => {
            assert.throw(() => findNewApartment.isGoodLocation(true, 1), 'Invalid input!')
        })
        it('diffrent city', () => {
        
            assert.equal(findNewApartment.isGoodLocation('a', true), 'This location is not suitable for you.')

        })
        it('publick transport', () => {
            
            assert.equal(findNewApartment.isGoodLocation('Sofia', false), 'There is no public transport in area.')
        })
        it('publick transport', () => {
    
            assert.equal(findNewApartment.isGoodLocation('Sofia', false), 'You can go on home tour!')
            
        })
        

    })
    describe('isLargeEnough', function(){
        it('Invalid input!', () => {
            assert.throw(() => findNewApartment.isLargeEnough([], 1), 'Invalid input!')
        })
        
        it('Invalid input!', () => {
           
            assert.throw(() => findNewApartment.isLargeEnough([1, 2, 3], 'a'), 'Invalid input!')
        })
        it('Invalid input!', () => {
            
            assert.throw(() => findNewApartment.isLargeEnough('a', 1), 'Invalid input!')
        })

        it('something', () =>{
            
            assert.equal(findNewApartment.isLargeEnough([1, 2, 3], 2), '2, 3')
            
        })

    })
    describe('isItAffordable', function(){
        it('Invalid input!', () => {
            assert.throw(() => findNewApartment.isItAffordable('a', 1), 'Invalid input!')
        })
        it('Invalid input!', () => {
            
            assert.throw(() => findNewApartment.isItAffordable(1, '1'), 'Invalid input!')
        })
        it('Invalid input!', () => {
            
            assert.throw(() => findNewApartment.isItAffordable(0, 1), 'Invalid input!')
        })
        it('Invalid input!', () => {
           
            assert.throw(() => findNewApartment.isItAffordable(1, 0), 'Invalid input!')
        })
        it('Invalid input!', () => {
            
            assert.throw(() => findNewApartment.isItAffordable(-1, 1), 'Invalid input!')
        })
        it('Invalid input!', () => {
            
            assert.throw(() => findNewApartment.isItAffordable(1, -1), 'Invalid input!')
        })
        it('not enough money', () => {
          
            assert.equal(findNewApartment.isItAffordable(1, 2), "You don't have enough money for this house!")

            
        })
        it('its equal', () => {
            
            assert.equal(findNewApartment.isItAffordable(1, 1), "You can afford this home!")
            
        })
        it('budget is more', () => {
            
            assert.equal(findNewApartment.isItAffordable(1, 1), "You can afford this home!")
            
        })

    })
})