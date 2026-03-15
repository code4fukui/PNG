# PNG

Pure JavaScript製のPNGエンコーダー/デコーダー

## 機能
- PNGデータの生成
- PNGデータのデコード

## 使い方
`import { PNG } from "https://code4fukui.github.io/PNG/PNG.js";`でインポートして使用できます。以下のサンプルコードのように、PNGデータの生成やデコードができます。

```js
import { PNG } from "https://code4fukui.github.io/PNG/PNG.js";

const bin = PNG.encode({ data: new Uint8ClampedArray([0xff, 0, 0, 0xff]), width: 1, height: 1 });
console.log(bin, typeof bin);

const img2 = PNG.decode(bin);
console.log(img2);
```

## ライセンス
MIT License