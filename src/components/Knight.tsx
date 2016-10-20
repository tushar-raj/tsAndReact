import * as React from 'react';

export interface KnightProps {
    // color: string
}

export interface KnightState {
    // position: [number, number]
}

export default class Knight extends React.Component <KnightProps, KnightState> {
    render(): JSX.Element {
        return <span id="knight" draggable={true} onDragStart ={this.handleDrag}>♘</span>;
    }

    handleDrag(evt: any){
        evt.dataTransfer.setData("text", evt.target.id);
    }
}
