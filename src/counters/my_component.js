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
        console.log('mf', 111);
        let value = +e.target.value;
        console.log('mf', 222);
        console.log('mf', 'change current', value);
        if (!this.isValid(value)) return

        this.setCurrent(value);
    }

    isValid(value) {
        console.log('mf', 'start val', value);
        if(isNaN(value)
            || value > this.props.max
            || value < this.props.min) {
            console.log('mf', 'is not valid');
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