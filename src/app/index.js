import React from 'react'
import style from './app-module.css'
import { Button } from "react-bootstrap"

export default class extends React.Component {
    state = {
        products: getProducts(),
        formData: {
            name: {
                label: 'Your Name',
                value: ''
            },
            email: {
                label: 'Email',
                value: ''
            },
            phone: {
                label: 'Phone',
                value: ''
            }
        },
        activeRoute: 'CART'
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

    moveToCart = () => {
        this.setState({activeRoute: 'CART'})
    }

    moveToOrder = () => {
        this.setState({activeRoute: 'ORDER'})
    }

    moveToResult = () => {
        this.setState({activeRoute: 'RESULT'})
    }

    render() {
        let page

        switch(this.state.activeRoute) {
            // case 'CART':
            //     page = <Cart/>
            //     break;
            //
            // case 'ORDER':
            //     page = <Order/>
            //     break;
            //
            // case 'RESULT':
            //     page = <Result/>
            //     break;
            default:
                page = <div>404</div>
        }

        return (
            <div className="container">
                {page}
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
