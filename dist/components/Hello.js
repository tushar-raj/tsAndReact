"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Hello = (function (_super) {
    __extends(Hello, _super);
    function Hello(props) {
        _super.call(this, props);
        this.state = { count: 0 };
    }
    Hello.prototype.getZero = function () {
        return 0;
    };
    Hello.prototype.incrementCount = function () {
        this.setState({
            count: this.state.count + 1
        });
    };
    Hello.prototype.render = function () {
        console.log(this);
        return (React.createElement("div", null, 
            React.createElement("button", {onClick: this.incrementCount}, 
                " Hello from ", 
                this.props.someProp, 
                "! "), 
            React.createElement("p", null, this.state.count)));
    };
    return Hello;
}(React.Component));
exports.Hello = Hello;
//# sourceMappingURL=Hello.js.map