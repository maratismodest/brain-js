const brain = require('./brain-js');
const data = require('./cars.json')
const {models,getRandomElement} = require('./cars.js')
// provide optional config object (or undefined). Defaults shown.
const config = {
    // binaryThresh: 0.5,
    hiddenLayers: [3], // array of integers for the sizes of the hidden layers in the network
    // activation: 'sigmoid' // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh']
};

// create a simple feed forward neural network with backpropagation
const net = new brain.NeuralNetwork(config);
net.train(data)

const model = getRandomElement(models)

const car = {
    model: model.value,
    year: 0.21,
    condition: 0.875
}

const output = net.run(car);

const price = Math.floor(output.price * 1000000)

const result = `The model ${model.name} of ${car.year * 100 + 2000} year in ${car.condition} condition costs ${price} RUB`
console.log(result)
