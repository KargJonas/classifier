// Jonas Karg 2019

// The dataset (has to be loaded first)
let dataset;
const TWO_PI = Math.PI * 2;

// Our weights
let currentWeights = [0, 0, 0, 0, 0, 0, 0, 0];
let learningRate = 0.1;

fetch("data/dataset-000.json")
  .then(response => response.json())
  .then(response => dataset = response)
  .then(() => calculateError(currentWeights))
  .then(draw)
  .then(() => window.requestAnimationFrame(train));

function train() {
  for (let i = 0; i < currentWeights.length; i++) {
    const error = calculateError(currentWeights);
    const newWeights = currentWeights.slice();
    const offset = Math.sin(Math.random() * TWO_PI) * learningRate;
    newWeights[i] += offset
    const improvement = error - calculateError(newWeights);

    if (improvement > 0) {
      currentWeights = newWeights;
      console.log(`Error: ${error * 100}%`);
    }
  }

  drawLine();
  window.requestAnimationFrame(train);
}

function f(x, weights) {
  let result = 0;

  for (let i = 0; i < weights.length; i++) {
    result += weights[i] * Math.pow(x, i);
  }

  return result;
}

function calculateError(weights) {
  const amount = dataset.length;
  let correct = 0;

  dataset.map(item => {
    const x = item.data[0];
    const y = item.data[1];
    let prediction = 0;

    // Predict the label of the current point with our function
    if (y > f(x, weights)) {
      prediction = 1;
    }

    // Validating the prediction
    if (prediction === item.label) {
      correct++;
    }
  });

  return 1 - correct / amount;
}