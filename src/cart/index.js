import React from 'react'
import PropTypes from 'prop-types'
import AppMinMax from '~/inputs/minmax'

export default class extends React.Component {
    static propTypes = {
        products: PropTypes.array.isRequired,
        onSend: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired,
        onRemove: PropTypes.func.isRequired
    }

    render() {
        let total = this.props.products.reduce((total, product) => {
            return total + (product.current * product.price)
        }, 0)

        let productsRows = this.props.products.map((el, i) => {
            console.log('--------------->', el, i)
            return (
                <tr key={el.id}>
                    <td>{el.title}</td>
                    <td>{el.price}</td>
                    <td>
                        <AppMinMax
                            min={1}
                            max={el.rest}
                            cnt={el.current}
                            onChange={(cnt) => this.props.onChange(i, cnt)}
                        />
                    </td>
                    <td>{el.price * el.current}</td>
                    <td>
                        <button
                            className="btn btn-danger"
                            onClick={() => this.props.onRemove(i)}>
                            X
                        </button>
                    </td>
                </tr>
            )
        })

        return (
            <div>
                <h2>Cart</h2>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <td>Title</td>
                        <td>Price</td>
                        <td>Count</td>
                        <td>Total</td>
                        <td>Actions</td>
                    </tr>
                    </thead>
                    <tbody>
                    {productsRows}
                    </tbody>
                </table>
                <h3>Total: {total}</h3>
                <hr/>
                <button
                    className="btn btn-success"
                    onClick={this.props.onSend}>Send</button>
            </div>
        )
    }
}
