import React from 'react'
import PropTypes from 'prop-types'
import AppLazyInput from './../lazy/lazy'
import styles from './minmax.css'

console.log('--------------->', styles)

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

    increase = () => {
        this.set(this.props.cnt + 1)
    }

    decrease = () => {
        this.set(this.props.cnt - 1)
    }

    set(newCnt) {
        let cnt = Math.min(Math.max(newCnt, this.props.min), this.props.max)
        this.props.onChange(cnt)
    }

    onChange = (e) => {
        // console.log('--------------->', e.target.value)
        let cnt = parseInt(e.target.value)
        this.set(isNaN(cnt) ? this.props.min : cnt)
    }

    render() {
        return (
            <div>
                <button onClick={this.decrease}>-</button>
                <AppLazyInput
                    nativeProps={{className: styles.input}}
                    value={this.props.cnt}
                    onChange={this.onChange}
                />
                <button onClick={this.increase}>+</button>
            </div>
        )
    }
}
