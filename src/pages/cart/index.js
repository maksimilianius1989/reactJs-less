import React from 'react'
import PropTypes from 'prop-types'
import AppMinMax from '~c/inputs/minmax'
import cartModel from '~s/cart'
import router from '~s/router'
import {observer} from "mobx-react"

export default @observer class extends React.Component {
    static propTypes = {
        onSend: PropTypes.func.isRequired
    }

    render() {
        let productsRows = cartModel.products.map((el, i) => {
            return (
                <tr key={el.id}>
                    <td>{el.title}</td>
                    <td>{el.price}</td>
                    <td>
                        <AppMinMax
                            min={1}
                            max={el.rest}
                            cnt={el.current}
                            onChange={(cnt) => cartModel.change(i, cnt)}
                        />
                    </td>
                    <td>{el.price * el.current}</td>
                    <td>
                        <button
                            className="btn btn-danger"
                            onClick={() => cartModel.remove(i)}>
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
                <h3>Total: {cartModel.total}</h3>
                <hr/>
                <button
                    className="btn btn-success"
                    onClick={() => router.moveTo('order')}>Send</button>
            </div>
        )
    }
}
