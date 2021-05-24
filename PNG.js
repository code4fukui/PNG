import { encodePNG } from "https://taisukef.github.io/PNGEncoder/encodePNG.js";
import { decodePNG } from "https://taisukef.github.io/pngjs/decodePNG.js";

const PNG = {
  encode: encodePNG,
  decode: decodePNG,
};

export { PNG };
