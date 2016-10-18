"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Square = (function (_super) {
    __extends(Square, _super);
    function Square() {
        _super.apply(this, arguments);
    }
    Square.prototype.render = function () {
        var black = this.props.black;
        var fill = black ? 'black' : 'white';
        var stroke = black ? 'white' : 'black';
        return (React.createElement("div", {style: {
            backgroundColor: fill,
            color: stroke,
            width: '100%',
            height: '100%'
        }}, this.props.children));
    };
    Square.propTypes = {
        black: React.PropTypes.bool
    };
    return Square;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Square;
//# sourceMappingURL=Square.js.map