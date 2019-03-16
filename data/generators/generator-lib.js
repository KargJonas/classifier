const JSONStream = require("JSONStream");
const fs = require("fs");
const jsonWriter = JSONStream.stringify();

function generate({ PATH, AMOUNT, SCALE_X, SCALE_Y, f }) {
  const file = fs.createWriteStream(PATH);
  jsonWriter.pipe(file);

  for (let i = 0; i < AMOUNT; i++) {
    // Generating a random point.
    const x = Math.random() * SCALE_X;
    const y = Math.random() * SCALE_Y;

    /**
     * A label of 0 means, the point is below the line,
     * 1 means, its above.
     */
    let label = 0;

    if (y > f(x)) {
      label = 1;
    }

    jsonWriter.write({
      data: [x, y],
      label: label
    });
  }

  jsonWriter.end();
}

module.exports = generate;