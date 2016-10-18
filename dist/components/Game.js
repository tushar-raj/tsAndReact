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
//# sourceMappingURL=Game.js.map