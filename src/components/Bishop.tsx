import * as React from 'react';

export interface BishopProps {
    // color: string
}

export interface BishopState {
    // position: [number, number]
}

export default class Bishop extends React.Component <BishopProps, BishopState> {
    render(): JSX.Element {
        return <span
                    id="bishop"
                    draggable={true}
                    onDragStart ={this.handleDrag}
                    style={{fontSize: '40px'}}
                >
                    ♗
                </span>;
    }

    handleDrag(evt: any){
        evt.dataTransfer.setData("text", evt.target.id);
    }
}
