const fns = require('./utils/functions');
const cars = require('./../server/carData.json')

test('getCars returned car fax', ()=> {
    expect.assertions(1);
    const url = 'http://localhost:3001/api/cars';
    return fns.getCars(url).then(res => {
        expect(res[0].color).toEqual("Yellow");
    })
})

test("getCarsById will return correct car", ()=> {
    let car = fns.filterById(cars, 5)
    expect(car[0].id).toBe(5)
})

test("randomNum() should return a random number between 1-10", ()=> {
    const num = fns.randomNum();
    expect(num).toBeGreaterThanOrEqual(1)
    expect(num).toBeLessThanOrEqual(10)
})

test("filterByColor() should return cars based on color", ()=> {
    let carsColor = fns.filterByColor(cars, 'Purple')
    expect(carsColor).toEqual([ { "id": 25, "make": "GMC", "model": "Savana 2500", "year": 2008, "color": "Purple" } ])
    expect(carsColor[0].color).toEqual("Purple")
})

test('battle() to return result of winner', () => {
    let winner = fns.battle(20, 5, 50, 20);
    expect(winner).toBe("Orc")
})

