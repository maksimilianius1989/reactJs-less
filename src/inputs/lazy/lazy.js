import React from 'react'
import PropTypes from 'prop-types'

export default class Some extends React.Component {
    static defaultProps = {
        onChange: function(cnt) {
            console.log('--------------->', cnt)
        }
    }

    static propTypes = {
        value: PropTypes.any.isRequired,
        onChange: PropTypes.func
    }

    state = {
        inputValue: this.props.cnt
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

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
