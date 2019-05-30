/*
Copyright (c) 2019 Daybrush
name: list-map
license: MIT
author: Daybrush
repository: git+https://github.com/daybrush/list-map.git
version: 0.1.1
*/
import { findIndex, find } from '@daybrush/utils';

/**
 *
 */

var ListMap =
/*#__PURE__*/
function () {
  function ListMap() {
    this.obj = {};
    this.objKeys = [];
  }
  /**
   *
   */


  var __proto = ListMap.prototype;

  __proto.has = function (key) {
    return key in this.obj;
  };
  /**
   *
   */


  __proto.get = function (key) {
    return this.obj[key];
  };
  /**
   *
   */


  __proto.set = function (key, value) {
    if (!this.has(key)) {
      this.objKeys.push(key);
    }

    this.setItem(key, value);
    return this;
  };
  /**
   *
   */


  __proto.size = function () {
    return this.objKeys.length;
  };
  /**
   *
   */


  __proto.keys = function () {
    return this.objKeys.slice();
  };
  /**
   *
   */


  __proto.values = function () {
    var obj = this.obj;
    var keys = this.objKeys;
    return keys.map(function (key) {
      return obj[key];
    });
  };
  /**
   *
   */


  __proto.getIndex = function (key) {
    return this.objKeys.indexOf(key);
  };
  /**
   *
   */


  __proto.findIndex = function (callback) {
    var obj = this.obj;
    return findIndex(this.objKeys, function (key, i) {
      return callback(obj[key], key, i, obj);
    });
  };
  /**
   *
   */


  __proto.find = function (callback) {
    var obj = this.obj;
    var result = find(this.objKeys, function (key, i) {
      return callback(obj[key], key, i, obj);
    });
    return obj[result];
  };
  /**
   *
   */


  __proto.remove = function (key) {
    if (this.has(key)) {
      var index = this.getIndex(key);
      this.removeItem(key);
      this.spliceKeys(index, 1);
    }

    return this;
  };
  /**
   *
   */


  __proto.splice = function (index, deleteCount) {
    var _this = this;

    var items = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      items[_i - 2] = arguments[_i];
    }

    var added = items.filter(function (_a) {
      var key = _a[0],
          value = _a[1];

      var hasItem = _this.has(key);

      _this.setItem(key, value);

      return !hasItem;
    });
    var deletedKeys = this.spliceKeys.apply(this, [index, deleteCount].concat(added.map(function (_a) {
      var key = _a[0];
      return key;
    })));
    deletedKeys.forEach(function (key) {
      _this.removeItem(key);
    });
    var obj = this.objKeys;
    return deletedKeys.map(function (key) {
      return [key, obj[key]];
    });
  };
  /**
   *
   */


  __proto.forEach = function (callback) {
    var obj = this.obj;
    this.objKeys.forEach(function (key, i) {
      return callback(obj[key], key, i, obj);
    });
    return this;
  };

  __proto.setItem = function (key, value) {
    this.obj[key] = value;
  };

  __proto.removeItem = function (key) {
    delete this.obj[key];
  };

  __proto.spliceKeys = function (index, deleteCount) {
    var _a;

    var items = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      items[_i - 2] = arguments[_i];
    }

    return (_a = this.objKeys).splice.apply(_a, [index, deleteCount].concat(items));
  };

  return ListMap;
}();

export default ListMap;
//# sourceMappingURL=list-map.esm.js.map
