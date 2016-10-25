"use strict";
var rookPosition = [0, 0];
var knightPosition = [1, 0];
var bishopPosition = [2, 0];
var observer = null;
function emitChange() {
    observer(knightPosition, rookPosition, bishopPosition);
}
function observe(o) {
    if (observer) {
        throw new Error('Multiple observers not implemented.');
    }
    observer = o;
    emitChange();
}
exports.observe = observe;
function moveKnight(toX, toY) {
    knightPosition = [toX, toY];
    emitChange();
}
exports.moveKnight = moveKnight;
function moveRook(toX, toY) {
    rookPosition = [toX, toY];
    emitChange();
}
exports.moveRook = moveRook;
function moveBishop(toX, toY) {
    bishopPosition = [toX, toY];
    emitChange();
}
exports.moveBishop = moveBishop;
function canMoveKnight(toX, toY) {
    var x = knightPosition[0], y = knightPosition[1];
    var dx = Math.abs(toX - x);
    var dy = Math.abs(toY - y);
    return ((dx === 2 && dy === 1) || (dx === 1 && dy === 2));
}
exports.canMoveKnight = canMoveKnight;
function canMoveRook(toX, toY) {
    var x = rookPosition[0], y = rookPosition[1];
    var dx = Math.abs(toX - x);
    var dy = Math.abs(toY - y);
    return ((dx === 0) || (dy === 0));
}
exports.canMoveRook = canMoveRook;
function canMoveBishop(toX, toY) {
    var x = bishopPosition[0], y = bishopPosition[1];
    var dx = Math.abs(toX - x);
    var dy = Math.abs(toY - y);
    return (dx === dy);
}
exports.canMoveBishop = canMoveBishop;
//# sourceMappingURL=Game.js.map