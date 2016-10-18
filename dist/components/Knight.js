"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Knight = (function (_super) {
    __extends(Knight, _super);
    function Knight() {
        _super.apply(this, arguments);
    }
    Knight.prototype.render = function () {
        return React.createElement("span", null, "♘");
    };
    return Knight;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Knight;
//# sourceMappingURL=Knight.js.map