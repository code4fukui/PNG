import { PNG } from "https://taisukef.github.io/PNG/PNG.js";

const imgd = {
  data: new Uint8ClampedArray([0xff, 0, 0, 0xff]),
  width: 1,
  height: 1,
};
const bin = PNG.encode(imgd);
console.log(bin, typeof bin);

const img2 = PNG.decode(bin);
console.log(img2);
