const fs = require('fs');

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

// LADA series
// 1 = 1 000 000, 0.6 = 600 000 - keep in mind it's lux
const models = [
    {
        label: "Six",
        price: 0.6,
    },
    {
        label: 'Seven',
        price: 0.7
    },
    {
        label: 'Nine',
        price: 0.8
    },
    {
        label: 'Kalina',
        price: 1
    }
];

// 2010 - 2024
// car price reduced depending on the age: 2015 car price lose 10% of factory price
const years = [
    {value: 0.80, label: '2010'},
    {value: 0.82, label: '2011'},
    {value: 0.84, label: '2012'},
    {value: 0.86, label: '2013'},
    {value: 0.88, label: '2014'},
    {value: 0.90, label: '2015'},
    {value: 0.92, label: '2016'},
    {value: 0.94, label: '2017'},
    {value: 0.96, label: '2018'},
    {value: 0.99, label: '2019'}
]

// equipment: lux is the default, because we operate from 0 to 1 range
const equipments = [
    {
        value: 0.79,
        label: 'Base'
    },
    {
        value: 0.89,
        label: 'Comfort'
    },
    {
        value: 0.99,
        label: 'Lux'
    }
]

const generateCars = (num) => {
    const cars = [];
    for (let i = 0; i < num; i++) {
        const _model = getRandomElement(models).price
        const _equipment = getRandomElement(equipments).value
        const _year = getRandomElement(years).value
        const _condition = 1 - Math.random() * Math.random()
        const _mileage = Math.random() * Math.random()

        const input = {
            model: _model,
            year: _year,
            equipment: _equipment,
            condition: _condition,
            mileage: _mileage,
        };

        const modelMultiplier = _model * 1000000
        const yearMultiplier = _year
        const conditionMultiplier = _condition
        const mileageMultiplier = 1 - _mileage;
        const equipmentMultiplier = _equipment
        const priceVariety = Math.floor(Math.random() * 30000)
        // const priceVariety = 0
        const _price = Math.floor(modelMultiplier * yearMultiplier * equipmentMultiplier * mileageMultiplier * conditionMultiplier + priceVariety)
        const output = {
            price: _price / 1000000
        }
        cars.push({input, output});
    }
    return cars;
};

// const count = 100000
// const cars = generateCars(count);
//
// fs.writeFileSync('cars.json', JSON.stringify(cars, null, 2), 'utf-8');
// console.log(count + ' cars have been generated and saved to cars.json');

module.exports = {
    models,
    years,
    equipments,
    getRandomElement
}
