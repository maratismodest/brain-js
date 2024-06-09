const fs = require('fs');

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

const models = [
    {
        name: "Six",
        value: 0.6
    },
    {
        name: 'Seven',
        value: 0.7
    },
    {
        name: 'Nine',
        value: 0.8
    },
    {
        name: 'Kalina',
        value: 0.9
    }
];
const years = [0.10, 0.12, 0.13, 0.14, 0.15, 0.16, 0.17, 0.18, 0.19, 0.20, 0.21, 0.22, 0.23, 0.24]

const generateCars = (num) => {
    const cars = [];
    for (let i = 0; i < num; i++) {
        const input = {
            model: getRandomElement(models).value,
            year: getRandomElement(years),
            condition: 1 - Math.random() * Math.random()
        };

        const basePrice = 800000
        const modelMultiplier = input.model
        const yearMultiplier = (input.year + 0.24) * 2
        const conditionMultiplier = input.condition
        const random = Math.floor(Math.random() * 50000)
        const price = Math.floor(basePrice * yearMultiplier * modelMultiplier * conditionMultiplier + random) / 1000000
        const output = {
            price
        }
        cars.push({input, output});
    }
    return cars;
};

const count = 10
const cars = generateCars(count);

fs.writeFileSync('cars.json', JSON.stringify(cars, null, 2), 'utf-8');
console.log(count + ' cars have been generated and saved to cars.json');

module.exports = {
    models,
    getRandomElement
}
