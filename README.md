# PNG

Pure JavaScript PNG encoder / decoder

```js
import { PNG } from "https://taisukef.github.io/PNG/PNG.js";

const bin = PNG.encode(new Uint8ClampedArray([0xff, 0, 0, 0xff]), 1, 1);
console.log(bin, typeof bin);

const img2 = PNG.decode(bin);
console.log(img2);
```

## async version

import as needed
```js
import { PNG } from "https://taisukef.github.io/PNG/PNG_async.js";

const bin = await PNG.encode(new Uint8ClampedArray([0xff, 0, 0, 0xff]), 1, 1);
console.log(bin, typeof bin);

const img2 = await PNG.decode(bin);
console.log(img2);
```
