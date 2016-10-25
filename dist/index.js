"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var Board_1 = require("./components/Board");
var Game_1 = require("./components/Game");
var rootEl = document.getElementById('mainWrapper');
Game_1.observe(function (knightPosition, rookPosition, bishopPosition) {
    ReactDOM.render(React.createElement(Board_1.default, { knightPosition: knightPosition, rookPosition: rookPosition, bishopPosition: bishopPosition }), rootEl);
});
//# sourceMappingURL=index.js.map