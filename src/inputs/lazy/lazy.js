import React from 'react'
import PropTypes from 'prop-types'

export default class extends React.Component {
    static defaultProps = {
        onChange: function(cnt) {
            console.log('--------------->', cnt)
        }
    }

    static propTypes = {
        value: PropTypes.any.isRequired,
        onChange: PropTypes.func
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    checkChange = (e) => {
        if (this.props.value.toString() !== e.target.value) {
            this.props.onChange(e)
        }
    }

    checkEnterKey = (e) => {
        if (e.keyCode === 13) {
            this.checkChange(e)
        }
    }

    render() {
        return (
            <input
                defaultValue={this.props.value}
                onBlur={this.checkChange}
                onKeyUp={this.checkEnterKey}
            />
        )
    }
}
