import * as React from 'react';

import { moveKnight, canMoveKnight, moveRook, canMoveRook } from './Game';

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

    // handleDrop(toX: number, toY: number, piece: JSX.Element): void {
    handleDrop(evt: any) {
        console.log(evt)
        const draggedPiece = evt.dataTransfer.getData('text');
        const {x: toX, y: toY, piece } = this.props;

        // const moveMap = {
        //     'knight': 'moveKnight',
        //     'rook': 'moveRook',
        // }

        //moveMap[draggedPiece](toX, toY);

        if(piece !== null){
            return
        }

        if(draggedPiece == 'knight'){
            if (canMoveKnight(toX, toY)) {
                moveKnight(toX, toY);
            } else {
                console.log('beep')
                //alert('Wrong move');
            }
        } else if(draggedPiece == 'rook'){
            if (canMoveRook(toX, toY)) {
                moveRook(toX, toY);
            } else {
                console.log('beep')
                //alert('Wrong move');
            }
        }


    }
}
