# PNG

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

Pure JavaScript PNG encoder/decoder

## Features
- Encode and decode PNG images in pure JavaScript
- Supports single and multi-frame PNG decoding
- Includes utility to check if a given binary data is a valid PNG

## Requirements
None. The project is self-contained and uses only standard JavaScript.

## Usage
To use the PNG encoder/decoder, import the `PNG` module from `PNG.js`:

```js
import { PNG } from "https://code4fukui.github.io/PNG/PNG.js";

const bin = PNG.encode({ data: new Uint8ClampedArray([0xff, 0, 0, 0xff]), width: 1, height: 1 });
console.log(bin, typeof bin);

const img2 = PNG.decode(bin);
console.log(img2);
```

## License
MIT License — see [LICENSE](LICENSE).