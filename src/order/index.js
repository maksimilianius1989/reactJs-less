import React from 'react'
import PropType from 'prop-types'
import { Form, Button } from 'react-bootstrap'

export default class extends React.Component {
    static propTypes = {
        formData: PropType.object.isRequired,
        onChange: PropType.func.isRequired,
        onSend: PropType.func.isRequired,
        onBack: PropType.func.isRequired
    }

    render() {
        let formFields = []
        for (let name in this.props.formData) {
            let field = this.props.formData[name]

            formFields.push(
                <Form.Group key={name} controlId={'order-form-' + name}>
                    <Form.Label>{field.label}</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
            )
        }

        return (
            <div>
                <h2>Order</h2>
                <hr/>
                <Form>
                    {formFields}
                </Form>
            </div>
        )
    }
}
