'use strict';

function Container() {
    this.map = {};
}

Container.prototype.set = function(key, val) {
    this.map[key] = val;
};

Container.prototype.get = function(key) {
    return this.map[key];
};

module.exports = Container;
