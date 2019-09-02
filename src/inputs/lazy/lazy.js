import React from 'react'
import PropTypes from 'prop-types'

export default class extends React.Component {
    static defaultProps = {
        onChange: function(cnt) {
            console.log('---------------> defaultProps onChange()', cnt)
        },
        nativeProps: {}
    }

    static propTypes = {
        value: PropTypes.any.isRequired,
        nativeProps: PropTypes.object
    }

    nativeInput = React.createRef()

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('---------------> this.props.value', this.props.value)
        console.log('---------------> prevProps.value', prevProps.value)
        let inp = this.nativeInput.current
        if (prevProps.value !== this.props.value) {
            inp.value = this.props.value
        }
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
                {...this.props.nativeProps}
                defaultValue={this.props.value}
                onBlur={this.checkChange}
                onKeyUp={this.checkEnterKey}
                ref={this.nativeInput}
            />
        )
    }
}
