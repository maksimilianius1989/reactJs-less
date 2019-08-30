import React, {useState} from 'react'
import AppMinMax from './hw/norm'

export default class extends React.Component {
    state = {
        products: [
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

    changeCnt(i, cnt) {
        let newProducts = [...this.state.products]
        let newProduct = {...newProducts[i]}
        newProduct.current = cnt;
        newProducts[i] = newProduct
        this.setState({products: newProducts})
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
                </tr>
            )
        })

        return (
            <div>
                <h2>Cart</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Title</td>
                            <td>Price</td>
                            <td>Count</td>
                            <td>Total</td>
                        </tr>
                        {productsRows}
                    </tbody>
                </table>
            </div>
        )
    }
}
