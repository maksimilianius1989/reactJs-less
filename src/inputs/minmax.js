import React from 'react'
import PropTypes from 'prop-types'

export default class Some extends React.Component {
    static defaultProps = {
        onChange: function(cnt) {
            console.log('--------------->', cnt)
        }
    }

    static propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        cnt: PropTypes.number.isRequired,
        onChange: PropTypes.func
    }

    state = {
        inputValue: this.props.cnt
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.cnt !== prevProps.cnt) {
            this.setState({inputValue: this.props.cnt})
        }
    }

    increase = () => {
        this.set(this.props.cnt + 1)
    }

    decrease = () => {
        this.set(this.props.cnt - 1)
    }

    set(newCnt) {
        let cnt = Math.min(Math.max(newCnt, this.props.min), this.props.max)
        this.setState({
            inputValue : cnt
        })
        //update cnt
        this.props.onChange(cnt)
    }

    setValue(newStr) {
        this.setState({
            inputValue: newStr
        })
    }

    applyValue = () => {
        let cnt = parseInt(this.state.inputValue)
        this.set(isNaN(cnt) ? this.props.min : cnt)
    }

    render() {
        return (
            <div>
                <button onClick={this.decrease}>-</button>
                <input value={this.state.inputValue}
                        onChange={(e) => this.setValue(e.target.value)}
                        onBlur={this.applyValue}/>
                <button onClick={this.increase}>+</button>
            </div>
        )
    }
}
