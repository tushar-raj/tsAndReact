import * as React from 'react';

export interface RookProps {
    // color: string
}

export interface RookState {
    // position: [number, number]
}

export default class Rook extends React.Component <RookProps, RookState> {
    render(): JSX.Element {
        return <span id="rook" draggable={true} onDragStart ={this.handleDrag}>♖</span>;
    }

    handleDrag(evt: any){
        evt.dataTransfer.setData("text", evt.target.id);
    }
}
