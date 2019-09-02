import React from 'react'
import AppMinMax from './inputs/minmax/minmax'
import style from './app-module.css'
import { Button } from "react-bootstrap"

export default class extends React.Component {
    state = {
        products: getProducts(),
        formDone: false
    }

    changeCnt(i, cnt) {
        let products = [...this.state.products]
        products[i] = {...products[i], current: cnt}
        this.setState({products})
    }

    remove(i) {
        let products = [...this.state.products]
        products.splice(i, 1)
        this.setState({products})
    }

    sendForm = () => {
        this.setState({formDone: true})
    }

    render() {
        let total = this.state.products.reduce((total, product) => {
            return total + (product.current * product.price)
        }, 0)

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

        let page = !this.state.formDone ? showForm(productsRows, total, this.sendForm) : showCongrats()

        return (
            <div>
                {page}
                <hr/>
                <button onClick={() => this.changeCnt(1, 4)}>Unreal change cnt</button>
            </div>
        )
    }
}

function showForm(productsRows, total, sendForm) {
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
            <h4>{total}</h4>
            <hr/>
            <button onClick={sendForm}>Send</button>
            <br/>
            <input className={style.input} />
            <br/>
            <Button variant="primary">
                Bootstrap Button 1
            </Button>
        </div>
    )
}

function showCongrats() {
    return (
        <div>
            <span>Данные отправлены успешно</span>
        </div>

    )
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
