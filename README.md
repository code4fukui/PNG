# PNG

Pure JavaScript PNG encoder / decoder

```js
import { PNG } from "https://code4fukui.github.io/PNG/PNG.js";

const bin = PNG.encode({ data: new Uint8ClampedArray([0xff, 0, 0, 0xff]), width: 1, height: 1 });
console.log(bin, typeof bin);

const img2 = PNG.decode(bin);
console.log(img2);
```

## dependencies

- [PNGEncoder](https://github.com/taisukef/PNGEncoder/)
- [pngjs](https://github.com/taisukef/pngjs/)

