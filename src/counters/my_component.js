import React from 'react';

export default class extends React.Component {
    constructor(prop) {
        super(prop)
        this.setCurrent(this.props.min)
    }

    state = {
        current: this.props.min
    }

    increment = () => {
        let res = this.state.current + 1
        if (!this.isValid(res)) return

        this.setState({
            current: res
        })
    }

    decrement = () => {
        let res = this.state.current - 1
        if (!this.isValid(res)) return

        this.setState({
            current: res
        })
    }

    setCurrent = (cur) => {
        this.setState({
            current: cur
        })
    }

    changeCurrent = (e) => {
        let value = +e.target.value;
        if (!this.isValid(value)) return

        this.setCurrent(value);
    }

    isValid(value) {
        if(isNaN(value)
            || value > this.props.max
            || value < this.props.min) {
            return false
        }
        return true;
    }

    render() {
        return (
            <div>
                <button onClick={this.decrement}>Minus 1</button>
                <span>{this.state.current}</span>
                <input type="text" onChange={this.changeCurrent}/>
                <button onClick={this.increment}>Plus 1</button>
            </div>
        );
    }
}