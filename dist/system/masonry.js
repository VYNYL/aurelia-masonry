'use strict';

System.register(['aurelia-framework', 'masonry-layout'], function (_export, _context) {
  "use strict";

  var noView, inject, bindable, Masonry, _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2, MasonryCustomAttribute;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  return {
    setters: [function (_aureliaFramework) {
      noView = _aureliaFramework.noView;
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
    }, function (_masonryLayout) {
      Masonry = _masonryLayout.Masonry;
    }],
    execute: function () {
      _export('MasonryCustomAttribute', MasonryCustomAttribute = (_dec = inject(Element), _dec(_class = noView(_class = (_class2 = function () {
        function MasonryCustomAttribute(element) {
          _classCallCheck(this, MasonryCustomAttribute);

          _initDefineProp(this, 'columnWidth', _descriptor, this);

          _initDefineProp(this, 'itemSelector', _descriptor2, this);
        }

        MasonryCustomAttribute.prototype.bind = function bind() {
          console.log("Binding", this);
        };

        return MasonryCustomAttribute;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'columnWidth', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'itemSelector', [bindable], {
        enumerable: true,
        initializer: null
      })), _class2)) || _class) || _class));

      _export('MasonryCustomAttribute', MasonryCustomAttribute);
    }
  };
});