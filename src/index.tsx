import * as React from "react";
import * as ReactDOM from "react-dom";

import Board from "./components/Board"
import { observe } from './components/Game';

const rootEl = document.getElementById('mainWrapper');

observe((knightPosition: any):any =>  {
    ReactDOM.render(
    <Board knightPosition={knightPosition} />,
        rootEl
    )}
);

// ReactDOM.render (
//     <Board knightPosition={[0, 4]} />,
//     document.getElementById("mainWrapper")
//
// )

// import { Hello } from "./components/Hello";
//
// ReactDOM.render(
//     <Hello compiler = "TypeScript"
//     framework = "React"
//     someProp = 'something' /> ,
//     document.getElementById("mainWrapper")
// );
