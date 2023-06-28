import { encodePNG } from "https://taisukef.github.io/PNGEncoder/encodePNG.js";
import { decodePNG } from "https://taisukef.github.io/pngjs/decodePNG.js";

const PNG = {
  encode: (imgd) => encodePNG(imgd.data, imgd.width, imgd.height),
  decode: decodePNG,
};

export { PNG };
