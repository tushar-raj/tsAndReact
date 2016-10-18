import * as React from "react";

export interface HelloProps {
    compiler: string;
    framework: string;
    someProp: string
}

interface MyState {
    count: number
}

export class Hello extends React.Component < HelloProps, MyState > {
        constructor(props: HelloProps) {
            super(props);
            this.state = {
                count: 0
            };
        }

        incrementCount = () => {
            console.log(this)
            this.setState({
                count: this.state.count + 1
            });
        }

        render() {
            return (
                <div>
                    <button onClick = {this.incrementCount}> Hello from {this.props.someProp}! </button>
                    <p> {this.state.count} </p>
                </div>
            );
        }
    }
