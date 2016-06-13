'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
  "use strict";

  var noView, _class, MasonryCustomAttribute;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      noView = _aureliaFramework.noView;
    }],
    execute: function () {
      _export('MasonryCustomAttribute', MasonryCustomAttribute = noView(_class = function MasonryCustomAttribute() {
        _classCallCheck(this, MasonryCustomAttribute);
      }) || _class);

      _export('MasonryCustomAttribute', MasonryCustomAttribute);
    }
  };
});