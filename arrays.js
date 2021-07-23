const numbers = [1, 2, 5, 9, 12, 32]

// foreach
numbers.forEach((value, index, array) => {
    // console.log(value)
    // console.log(index)
    // console.log(array)
})

// map
const numbersBy2 = numbers.map((value, index, array) => {
    return value * 2
})
// console.log(numbersBy2)

// Filter
const over18 = numbers.filter((value, index, array) => {
    return value > 18
})
// console.log(over18)

// Reduce
// Reduce func takes 4 params. first param is Previous value 
let sum = numbers.reduce((preValue, value, index, array) => {
    return preValue + value
})
// console.log(sum)

// pervious value param can be initlize :- 100
let sum100 = numbers.reduce((preValue, value, index, array) => {
    return preValue + value
}, 100)
// console.log(sum100)

// 