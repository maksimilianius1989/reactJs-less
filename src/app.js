import React from 'react'
import AppInput from './inputs/lazy/lazy'

export default class extends React.Component {
    state = {
        inp1: 'start',
        inp2: 'start other'
    }

    render() {

        return (
            <div>
                <h2>Lazy input</h2>
                <p>{this.state.inp1}</p>
                <AppInput
                    value={this.state.inp1}
                    onChange={(e) => this.setState({
                        inp1: e.target.value
                    })}
                />
            </div>
        )
    }
}
