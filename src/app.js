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
                    nativeProps={{type: 'text', className: 'some'}}
                    value={this.state.inp1}
                    onChange={(e) => this.setState({
                        inp1: e.target.value
                    })}
                />
                <h2>Lazy input NO lazy</h2>
                <p>{this.state.inp2}</p>
                <AppInput
                    nativeProps={{
                        type: 'text',
                        className: 'some',
                        onChange: (e) => this.setState({inp2: e.target.value})
                    }}
                    value={this.state.inp2}
                />
                <br/>
                <button
                    onClick={(e) => this.setState({inp1: 'test'})}
                >
                    Unreal change
                </button>
            </div>
        )
    }
}
