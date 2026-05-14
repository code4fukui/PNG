# PNG

Pure JavaScriptによるPNGエンコーダ/デコーダ

## 特徴
- Pure JavaScriptによるPNG画像のエンコードおよびデコード
- シングルフレームおよびマルチフレームのPNGデコードに対応
- 指定されたバイナリデータが有効なPNGであるかを確認するユーティリティを内包

## 要件
なし。本プロジェクトは自己完結しており、標準のJavaScriptのみを使用します。

## 使用方法
PNGエンコーダ/デコーダを使用するには、`PNG.js`から`PNG`モジュールをインポートします。

```js
import { PNG } from "https://code4fukui.github.io/PNG/PNG.js";

const bin = PNG.encode({ data: new Uint8ClampedArray([0xff, 0, 0, 0xff]), width: 1, height: 1 });
console.log(bin, typeof bin);

const img2 = PNG.decode(bin);
console.log(img2);
```

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
