const PNG = {
  async encode(imgd, width, height) {
    if (!this.encodePNG) {
      this.encodePNG = (await import("https://taisukef.github.io/PNGEncoder/encodePNG.js")).encodePNG;
    }
    return this.encodePNG(imgd, width, height);
  },
  async decode(bin) {
    if (!this.decodePNG) {
      this.decodePNG = (await import("https://taisukef.github.io/pngjs/decodePNG.js")).decodePNG;
    }
    return this.decodePNG(bin);
  }
};

export { PNG };
