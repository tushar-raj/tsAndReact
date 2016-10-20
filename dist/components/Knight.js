"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Knight = (function (_super) {
    __extends(Knight, _super);
    function Knight() {
        return _super.apply(this, arguments) || this;
    }
    Knight.prototype.render = function () {
        return React.createElement("span", { id: "knight", draggable: true, onDragStart: this.handleDrag }, "\u2658");
    };
    Knight.prototype.handleDrag = function (evt) {
        evt.dataTransfer.setData("text", evt.target.id);
    };
    return Knight;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Knight;
//# sourceMappingURL=Knight.js.map