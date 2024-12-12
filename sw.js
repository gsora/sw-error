importScripts("./pkg/sw_error.js");

const { test } = wasm_bindgen;
async function initialize() {
  console.log("init: calling wasm_bindgen()");
  await wasm_bindgen();

  test();

  console.log("init: done");
}

initialize();
