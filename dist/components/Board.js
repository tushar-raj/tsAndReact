"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Square_1 = require("./Square");
var Knight_1 = require("./Knight");
var Rook_1 = require("./Rook");
var Bishop_1 = require("./Bishop");
var Board = (function (_super) {
    __extends(Board, _super);
    function Board() {
        return _super.apply(this, arguments) || this;
    }
    Board.prototype.renderSquare = function (i) {
        var x = i % 8;
        var y = Math.floor(i / 8);
        var black = (x + y) % 2 === 1;
        var _a = this.props.knightPosition, knightX = _a[0], knightY = _a[1];
        var _b = this.props.rookPosition, rookX = _b[0], rookY = _b[1];
        var _c = this.props.bishopPosition, bishopX = _c[0], bishopY = _c[1];
        var piece = null;
        if (x === knightX && y === knightY) {
            piece = React.createElement(Knight_1.default, null);
        }
        else if (x === rookX && y === rookY) {
            piece = React.createElement(Rook_1.default, null);
        }
        else if (x === bishopX && y === bishopY) {
            piece = React.createElement(Bishop_1.default, null);
        }
        return (React.createElement("div", { key: i, style: { width: '12.5%', height: '50px' } },
            React.createElement(Square_1.default, { black: black, x: x, y: y, piece: piece },
                " ",
                piece,
                " ")));
    };
    Board.prototype.render = function () {
        var squares = [];
        for (var i = 0; i < 64; i++) {
            squares.push(this.renderSquare(i));
        }
        return (React.createElement("div", { style: {
                width: '100%',
                height: '100%',
                display: 'flex',
                flexWrap: 'wrap'
            } }, squares));
    };
    return Board;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Board;
Board.propTypes = {
    knightPosition: React.PropTypes.arrayOf(React.PropTypes.number.isRequired).isRequired,
    rookPosition: React.PropTypes.arrayOf(React.PropTypes.number.isRequired),
    bishopPosition: React.PropTypes.arrayOf(React.PropTypes.number.isRequired),
};
//# sourceMappingURL=Board.js.map