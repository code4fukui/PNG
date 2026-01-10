import { encodePNG } from "https://taisukef.github.io/PNGEncoder/encodePNG.js";
import { decodePNG, decodePNGs } from "https://taisukef.github.io/pngjs/decodePNG.js";

const PNG = {
  encode: (imgd) => encodePNG(imgd.data, imgd.width, imgd.height),
  decode: decodePNG,
  decodeMulti: decodePNGs,
  canDecode: (bin) => {
    if (!bin) return false;
    const header = [0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A];
    if (bin.length < header.length) return false;
    for (let i = 0; i < header.length; i++) {
      if (bin[i] != header[i]) return false;
    }
    return true;
  },
};

export { PNG };
