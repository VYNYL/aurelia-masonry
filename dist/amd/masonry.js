define(['exports', 'aurelia-framework', 'masonry-layout'], function (exports, _aureliaFramework, _masonryLayout) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MasonryCustomAttribute = undefined;

  var _masonryLayout2 = _interopRequireDefault(_masonryLayout);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

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

  var _dec, _class, _desc, _value, _class2, _descriptor, _descriptor2;

  var MasonryCustomAttribute = exports.MasonryCustomAttribute = (_dec = (0, _aureliaFramework.inject)(Element), (0, _aureliaFramework.noView)(_class = _dec(_class = (_class2 = function () {
    function MasonryCustomAttribute(element) {
      _classCallCheck(this, MasonryCustomAttribute);

      _initDefineProp(this, 'columnWidth', _descriptor, this);

      _initDefineProp(this, 'itemSelector', _descriptor2, this);

      this.element = element;
    }

    MasonryCustomAttribute.prototype.bind = function bind(element) {
      var masonrySettings = {};
      masonrySettings.columnWidth = this.columnWidth || 200;
      masonrySettings.itemSelector = this.itemSelector || '.grid-item';
      this.masonry = new _masonryLayout2.default(this.element, masonrySettings);
    };

    MasonryCustomAttribute.prototype.attached = function attached() {
      this.masonry.layout();
    };

    MasonryCustomAttribute.prototype.layout = function layout() {
      this.masonry.layout();
    };

    return MasonryCustomAttribute;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'columnWidth', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'itemSelector', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class) || _class);
});