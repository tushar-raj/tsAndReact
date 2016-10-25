import * as React from 'react';

import { moveKnight, canMoveKnight, moveRook, canMoveRook, moveBishop, canMoveBishop } from './Game';

export interface SquareProps {
    black: boolean,
    x: number,
    y: number,
    piece: any,
}

export interface SquareState {
    // position: [number, number]
}

export default class Square extends React.Component <SquareProps, SquareState> {
    static propTypes = {
      black: React.PropTypes.bool
    };



    render(): JSX.Element {
        const { black,x,y } = this.props;
        const fill: string = black ? 'black' : 'white';
        const stroke: string = black ? 'white' : 'black';

        return (
            <div style={{
                backgroundColor: fill,
                color: stroke,
                width: '100%',
                height: '100%'
            }}

            onDragOver={this.handleDragOver}
            onDrop={this.handleDrop.bind(this)}
            >
                {this.props.children}
            </div>
        );
    }


    handleDragOver(evt: any): void{
        evt.preventDefault();
    }

    handleDrop(evt: any) {
        console.log(evt)
        const draggedPiece = evt.dataTransfer.getData('text');
        const {x: toX, y: toY, piece } = this.props;

        if(piece !== null){
            return
        }

        switch(draggedPiece){
            case 'knight':
                if (canMoveKnight(toX, toY)) {
                    moveKnight(toX, toY);
                } else {
                    this.handleWrongMove();
                }
            break;

            case 'rook':
                if (canMoveRook(toX, toY)) {
                    moveRook(toX, toY);
                } else {
                    this.handleWrongMove();
                }
            break;

            case 'bishop':
                if (canMoveBishop(toX, toY)) {
                    moveBishop(toX, toY);
                } else {
                    this.handleWrongMove();
                }
            break;

            default:
                this.handleWrongMove();
        }
    }

    handleWrongMove(){
        console.log('Wrong move');
        //alert('Wrong move');
    }
}
