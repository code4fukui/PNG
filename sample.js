import { PNG } from "https://taisukef.github.io/PNG/PNG.js";

const bin = PNG.encode(new Uint8ClampedArray([0xff, 0, 0, 0xff]), 1, 1);
console.log(bin, typeof bin);

const img2 = PNG.decode(bin);
console.log(img2);
