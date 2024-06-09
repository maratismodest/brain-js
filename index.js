const brain = require('./brain-js');
const data = require('./cars.json')
const {models, getRandomElement, years, equipments} = require('./cars.js')

// provide optional config object (or undefined). Defaults shown.
const config = {
    // binaryThresh: 0.5,
    // hiddenLayers: [3], // array of integers for the sizes of the hidden layers in the network
    // activation: 'sigmoid' // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh']
};

// create a simple feed forward neural network with backpropagation


for (let i = 0; i < equipments.length; i++) {
    const prices = []
    const _model = models[3]
    const _equipment = equipments[i]
    const _year = years[5]
    const car = {
        model: _model.price,
        year: years[5].value,
        equipment: _equipment.value,
        condition: 0.94, // 1.00 is perfect condition
        mileage: 0.094, // 94 000 miles
    }
    for (let i = 0; i < 10; i++) {
        const net = new brain.NeuralNetwork(config);
        net.train(data)
        const output = net.run(car);
        // console.log(output.price)
        prices.push(output.price)
    }

    const price = Math.floor(prices.reduce((prev, item) => prev + item, 0)  /prices.length * 1000000)
    const result = `The model ${_model.label} ${_equipment.label} of ${_year.label} year in ${car.condition} condition with ${car.mileage * 1000 * 1000} mileage costs ${price} RUB`

    console.log(result)
}





