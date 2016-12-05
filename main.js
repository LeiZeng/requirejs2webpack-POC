requirejs.config({
  path: {
    "three": "./lib/three"
  },
  map:{
    "*": {
      "component": "./component"
    }
  },
  shim: {
    "component": {
      deps: ["jquery"],
      exports: "component"
    }
  }
});
require("./index")
