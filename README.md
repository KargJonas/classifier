## This is an attempt to implement a simple classifier in JavaScript. (I guess, this rather is a genetic algorithm)

### What I am trying to achieve:
I want to create a program, which I feed in some training data, which is comprised of two values. There is a certain line (or curve), above, or below which a point will either be classified as type "A" or "B". The program's job is to figure out, WHERE TO DRAW THE LINE.

### How to define the line:
The line is defined by a function:<br>
`f(x) = x⁰ • w₀ + x¹ • w₁ + x² • w₂ • ...`<br>
The "w"s are our weights. This they are the values, our program needs to figure out.

### How does the program figure out the values?
At first, all weights will have some initial value, lets say 0. After that, we calculate the error of the the model using those weights. The values are tweaked by some random amounts and the error is calculated again. If the error is lower, we keep the changes otherwise we discard it. This is done multiple times (until the error reaches a local minimum).

### About the dataset:
The dataset consists of points (x;y) and a label the label is either "0" or "1" depending on if the point is above or below a function.
> (`data/` contains a dataset-generator, which can be run using `npm run generate`, the generator-configuration is in `data/generate.js`)

### Example
The color of the dots indicates their label (red = 1; blue = 0) and their position is defined by well .. their position (lower-left corner is (0;0)).

The black line is the function, which the algorithm figured out.

The error-count in the console shows how many percent of the points were predicted invalidly.

![Example](example.png)