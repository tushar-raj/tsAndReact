import * as React from 'react';

export interface SquareProps {
    black: boolean,
}

export interface SquareState {
    // position: [number, number]
}

export default class Square extends React.Component <SquareProps, SquareState> {
    static propTypes = {
      black: React.PropTypes.bool
    };

    render() {
       const { black } = this.props;
       const fill = black ? 'black' : 'white';
       const stroke = black ? 'white' : 'black';

       return (
         <div style={{
           backgroundColor: fill,
           color: stroke,
           width: '100%',
           height: '100%'
         }}>
           {this.props.children}
         </div>
       );
     }
}
