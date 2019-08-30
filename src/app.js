import React, {useState} from 'react'
import AppMinMax from './hw/norm'

export default class extends React.Component {
    state = {
        products: getProducts()
    }

    changeCnt(i, cnt) {
        let products = [...this.state.products]
        products[i] = {...products[i], current: cnt}
        this.setState({products})
    }

    remove(i) {
        let products = [...this.state.products];
        products.splice(i, 1)
        this.setState({products})
    }

    render() {
        let productsRows = this.state.products.map((el, i) => {
            return (
                <tr key={el.id}>
                    <td>{el.title}</td>
                    <td>{el.price}</td>
                    <td>
                        <AppMinMax
                            min={1}
                            max={el.rest}
                            cnt={el.current}
                            onChange={(cnt) => this.changeCnt(i, cnt)}
                        />
                    </td>
                    <td>{el.price * el.current}</td>
                    <td>
                        <button onClick={() => this.remove(i)}>
                            X
                        </button>
                    </td>
                </tr>
            )
        })

        return (
            <div>
                <h2>Cart</h2>
                <table>
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
            </div>
        )
    }
}


function getProducts() {
    return [
        {
            id: 100,
            title: 'Iphone 200',
            price: 12000,
            rest: 10,
            current: 1
        },
        {
            id: 101,
            title: 'Samsung 200',
            price: 22000,
            rest: 5,
            current: 1
        }
    ]
}