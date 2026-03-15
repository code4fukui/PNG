# PNG

Pure JavaScript PNG エンコーダー/デコーダー

## デモ
以下のサンプルコードを実行すると、PNGデータを生成・デコードできます。

```js
import { PNG } from "https://code4fukui.github.io/PNG/PNG.js";

const bin = PNG.encode({ data: new Uint8ClampedArray([0xff, 0, 0, 0xff]), width: 1, height: 1 });
console.log(bin, typeof bin);

const img2 = PNG.decode(bin);
console.log(img2);
```

## 機能
- PNGデータの生成
- PNGデータのデコード

## 必要環境
特に必要ありません。

## 使い方
`import { PNG } from "https://code4fukui.github.io/PNG/PNG.js";`でインポートして使用できます。

## ライセンス
MIT License