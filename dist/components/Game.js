"use strict";
var knightPosition = [0, 0];
var observer = null;
function emitChange() {
    observer(knightPosition);
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
function canMoveKnight(toX, toY) {
    var x = knightPosition[0], y = knightPosition[1];
    var dx = Math.abs(toX - x);
    var dy = Math.abs(toY - y);
    return ((dx === 2 && dy === 1) || (dx === 1 && dy === 2));
}
exports.canMoveKnight = canMoveKnight;
//# sourceMappingURL=Game.js.map