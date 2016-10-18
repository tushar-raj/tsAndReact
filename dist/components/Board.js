"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Square_1 = require('./Square');
var Knight_1 = require('./Knight');
var Game_1 = require('./Game');
var Board = (function (_super) {
    __extends(Board, _super);
    function Board() {
        _super.apply(this, arguments);
    }
    Board.prototype.renderSquare = function (i) {
        var _this = this;
        var x = i % 8;
        var y = Math.floor(i / 8);
        var black = (x + y) % 2 === 1;
        var _a = this.props.knightPosition, knightX = _a[0], knightY = _a[1];
        var piece = (x === knightX && y === knightY) ?
            React.createElement(Knight_1.default, null) :
            null;
        return (React.createElement("div", {key: i, style: { width: '12.5%', height: '50px' }, onClick: function () { return _this.handleSquareClick(x, y); }}, 
            React.createElement(Square_1.default, {black: black}, 
                " ", 
                piece, 
                " ")
        ));
    };
    Board.prototype.handleSquareClick = function (toX, toY) {
        Game_1.moveKnight(toX, toY);
    };
    Board.prototype.render = function () {
        var squares = [];
        for (var i = 0; i < 64; i++) {
            squares.push(this.renderSquare(i));
        }
        return (React.createElement("div", {style: {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexWrap: 'wrap'
        }}, 
            " ", 
            squares));
    };
    Board.propTypes = {
        knightPosition: React.PropTypes.arrayOf(React.PropTypes.number.isRequired).isRequired
    };
    return Board;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Board;
//# sourceMappingURL=Board.js.map