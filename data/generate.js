const generate = require("./generators/generator-lib");

const PATH = "dataset-000.json";
const AMOUNT = 1000;
const SCALE_X = 1;
const SCALE_Y = 1;

function f(x) {
  return 0.5 * x + 0.1;
}

generate({ PATH, AMOUNT, SCALE_X, SCALE_Y, f });