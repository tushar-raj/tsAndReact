import * as React from "react";
import * as ReactDOM from "react-dom";

import Board from "./components/Board"
import { observe } from './components/Game';

const rootEl = document.getElementById('mainWrapper');



observe((knightPosition: number[], rookPosition: number[], bishopPosition: number[]): void =>  {
    ReactDOM.render(
    <Board knightPosition={knightPosition} rookPosition={rookPosition} bishopPosition={bishopPosition} />,
        rootEl
    )}
);
