const functions = require('./functions')

test('return2 should return 2', ()=>{
    expect(functions.returnTwo()).toEqual(2);
})

test('greeting should return "Hello," + name', ()=>{
    expect(functions.greeting('Jake')).toEqual("Hello, Jake")
    expect(functions.greeting('Tom')).toEqual("Hello, Tom")
    expect(functions.greeting('Mark')).toEqual("Hello, Mark")
})

describe("Math functions:", ()=>{
    test('add should return the sum of num1 and num2', ()=>{
        expect(functions.add(1,2)).toEqual(3)
        expect(functions.add(4,9)).toEqual(13)
        expect(functions.add(200,30)).toEqual(230)
    
    })

    test('multiply should return the product of num1 and num2', () =>{
        expect(functions.multiply(2,3)).toEqual(6)
        expect(functions.multiply(5,5)).toEqual(25)
    })

    test('divide should return num1 divided by num2', () =>{
        expect(functions.divide(10,2)).toEqual(5)
        expect(functions.divide(5,5)).toEqual(1)
    })

    test('subtract should return the remainder of num1 and num2', () =>{
        expect(functions.subtract(10,9)).toEqual(1)
        expect(functions.subtract(20,25)).toEqual(-5)
})})