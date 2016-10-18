import * as React from 'react';
import Square from './Square';
import Knight from './Knight';

import { moveKnight } from './Game';

export interface BoardProps {
    knightPosition: number[]
}

export interface BoardState {
    // position: [number, number]
}

export default class Board extends React.Component<BoardProps, BoardState> {
    static propTypes = {
        knightPosition: React.PropTypes.arrayOf(
            React.PropTypes.number.isRequired
        ).isRequired
    };

    renderSquare(i: number) {
        const x = i % 8;
        const y = Math.floor(i / 8);
        const black = (x + y) % 2 === 1;

        const [knightX, knightY] = this.props.knightPosition;
        const piece = (x === knightX && y === knightY) ?
            <Knight /> :
            null;

        return (
            <div key = {i}
                style = {{ width: '12.5%', height: '50px'}}
                onClick={() => this.handleSquareClick(x, y)}
            >

                <Square black = {black}> {piece} </Square>
            </div>
        );
    }

    handleSquareClick(toX: number, toY: number) {
        moveKnight(toX, toY);
    }

    render() {
        const squares: Array<any> = [];
        for (let i = 0; i < 64; i++) {
            squares.push(this.renderSquare(i));
        }

        return ( <div style = {{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexWrap: 'wrap'
                }} > {squares}
                </div>
        );
    }
}
