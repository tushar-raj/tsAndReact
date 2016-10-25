import * as React from 'react';
import Square from './Square';
import Knight from './Knight';
import Rook from './Rook';
import Bishop from './Bishop';


export interface BoardProps {
    knightPosition: number[],
    rookPosition: number[],
    bishopPosition: number[],
}

export interface BoardState {
    // position: [number, number]
}

export default class Board extends React.Component <BoardProps, BoardState> {
    static propTypes = {
        knightPosition: React.PropTypes.arrayOf(
            React.PropTypes.number.isRequired
        ).isRequired,

        rookPosition: React.PropTypes.arrayOf(
            React.PropTypes.number.isRequired
        ),

        bishopPosition: React.PropTypes.arrayOf(
            React.PropTypes.number.isRequired
        ),
    };

    renderSquare(i: number): JSX.Element {
        const x: number = i % 8;
        const y: number = Math.floor(i / 8);
        const black: boolean = (x + y) % 2 === 1;

        const [knightX, knightY]: number[] = this.props.knightPosition;
        const [rookX, rookY]: number[] = this.props.rookPosition;
        const [bishopX, bishopY]: number[] = this.props.bishopPosition;

        let piece: any = null;
        if(x === knightX && y === knightY){
            piece = <Knight />
        } else if(x === rookX && y === rookY){
            piece = <Rook />
        } else if(x === bishopX && y === bishopY){
            piece = <Bishop />
        }


        return (
            <div key = {i}
                style = {{ width: '12.5%', height: '50px'}}
                //onClick={() => this.handleSquareClick(x, y)} //hack: find better solution
            >
                <Square black = {black} x= {x} y={y} piece={piece}
                > {piece} </Square>
            </div>
        );
    }

    // handleSquareClick(toX: number, toY: number): void {
    //     if (canMoveKnight(toX, toY)) {
    //         moveKnight(toX, toY);
    //     }
    // }



    render(): JSX.Element {
        const squares: JSX.Element[] = [];
        for (let i = 0; i < 64; i++) {
            squares.push(this.renderSquare(i));
        }

        return (
            <div style = {{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexWrap: 'wrap'
            }}>
                {squares}
            </div>
        );
    }
}
