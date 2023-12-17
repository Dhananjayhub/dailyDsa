const sizeOf = require("image-size");

const dimensions = sizeOf("mpv-shot0001.jpg");

console.log(dimensions.width, dimensions.height);