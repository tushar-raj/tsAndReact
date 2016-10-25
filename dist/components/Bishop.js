"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Bishop = (function (_super) {
    __extends(Bishop, _super);
    function Bishop() {
        return _super.apply(this, arguments) || this;
    }
    Bishop.prototype.render = function () {
        return React.createElement("span", { id: "bishop", draggable: true, onDragStart: this.handleDrag, style: { fontSize: '40px' } }, "\u2657");
    };
    Bishop.prototype.handleDrag = function (evt) {
        evt.dataTransfer.setData("text", evt.target.id);
    };
    return Bishop;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Bishop;
//# sourceMappingURL=Bishop.js.map