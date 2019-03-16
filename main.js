const WIDTH = 500;
const HEIGHT = 500;
const pointCnv = document.getElementById("point-cnv");
const pointCtx = pointCnv.getContext("2d");
const lineCnv = document.getElementById("line-cnv");
const lineCtx = lineCnv.getContext("2d");
lineCtx.lineWidth = 3;

function draw() {
  pointCtx.beginPath();

  dataset.map(
    item => {
      const isAbove = item.label;

      if (isAbove) {
        pointCtx.fillStyle = `rgb(255, 100, 100)`;
      } else {
        pointCtx.fillStyle = `rgb(100, 100, 255)`;
      }

      pointCtx.fillRect(item.data[0] * WIDTH, HEIGHT - item.data[1] * HEIGHT, 4, 4);
    }
  );

  pointCtx.stroke();
}

function drawLine() {
  lineCtx.clearRect(0, 0, WIDTH, HEIGHT);
  lineCtx.beginPath();
  lineCtx.moveTo(0, HEIGHT - f(0, currentWeights) * HEIGHT);
  lineCtx.lineTo(WIDTH, HEIGHT - f(1, currentWeights) * HEIGHT);
  lineCtx.stroke();
}