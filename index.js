// Code your solution in this file!
const driversArray = ['Antonia', 'Nuru', 'Amari', 'Mo']


const returnFirstTwoDrivers = (driversArray) => {
    return driversArray.slice(0,2)
}

const returnLastTwoDrivers = function(driversArray){
    return driversArray.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

//const createFareMultiplier = (x) => (multipliers) => x * multipliers;

const createFareMultiplier = function(multipliers){
    return function(x){
        return x * multipliers
    }
}
createFareMultiplier(4)

//const createFareMultiplier = function(multiplier){
    //return Math.pow(multiplier, 5)
//}
//createFareMultiplier(4)

//const fareDoubler = (x) => (createFareMultiplier) => x * createFareMultiplier;
//fareDoubler(2)

const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare)
}
fareDoubler(10)

const fareTripler = function(fares){
    return createFareMultiplier(3)(fares)
}
fareTripler(10)

const selectDifferentDrivers = function(driversArray, arg2){
    return arg2(driversArray)
}
selectDifferentDrivers(driversArray, returnFirstTwoDrivers)