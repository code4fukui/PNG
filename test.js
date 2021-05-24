import * as t from "https://deno.land/std/testing/asserts.ts";
import { PNG } from "./PNG.js";

Deno.test("sync", () => {
  const img = new Uint8Array(4);
  img[0] = 0xff;
  img[3] = 0xff;
  console.log(img);
  const bin = PNG.encode(img, 1, 1);
  console.log(bin, typeof bin);
  //await Deno.writeFile("test.png", bin);
  
  const img2 = PNG.decode(bin);
  console.log(img2);
  t.assertEquals(img2.data, img);
});
