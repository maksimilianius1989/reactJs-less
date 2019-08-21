import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cnt: 1
        };
    }

    increase() {
        console.log('mf', this);
    }

    render() {
        return (
            <div>
                <strong>{this.state.cnt}</strong>
                <br/>
                <button onClick={this.increase.bind(this)}>Plus 1</button>
            </div>
        );
    }
}