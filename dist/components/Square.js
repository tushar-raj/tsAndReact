"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Game_1 = require("./Game");
var Square = (function (_super) {
    __extends(Square, _super);
    function Square() {
        return _super.apply(this, arguments) || this;
    }
    Square.prototype.render = function () {
        var _a = this.props, black = _a.black, x = _a.x, y = _a.y;
        var fill = black ? 'black' : 'white';
        var stroke = black ? 'white' : 'black';
        return (React.createElement("div", { style: {
                backgroundColor: fill,
                color: stroke,
                width: '100%',
                height: '100%'
            }, onDragOver: this.handleDragOver, onDrop: this.handleDrop.bind(this) }, this.props.children));
    };
    Square.prototype.handleDragOver = function (evt) {
        evt.preventDefault();
    };
    Square.prototype.handleDrop = function (evt) {
        console.log(evt);
        var draggedPiece = evt.dataTransfer.getData('text');
        var _a = this.props, toX = _a.x, toY = _a.y, piece = _a.piece;
        if (piece !== null) {
            return;
        }
        switch (draggedPiece) {
            case 'knight':
                if (Game_1.canMoveKnight(toX, toY)) {
                    Game_1.moveKnight(toX, toY);
                }
                else {
                    this.handleWrongMove();
                }
                break;
            case 'rook':
                if (Game_1.canMoveRook(toX, toY)) {
                    Game_1.moveRook(toX, toY);
                }
                else {
                    this.handleWrongMove();
                }
                break;
            case 'bishop':
                if (Game_1.canMoveBishop(toX, toY)) {
                    Game_1.moveBishop(toX, toY);
                }
                else {
                    this.handleWrongMove();
                }
                break;
            default:
                this.handleWrongMove();
        }
    };
    Square.prototype.handleWrongMove = function () {
        console.log('Wrong move');
    };
    return Square;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Square;
Square.propTypes = {
    black: React.PropTypes.bool
};
//# sourceMappingURL=Square.js.map