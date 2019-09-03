import React from 'react'
import style from './app-module.css'
import Cart from '~/cart'
import Order from '~/order'
import Result from '~/result'

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

    changeCnt = (i, cnt) => {
        let products = [...this.state.products]
        products[i] = {...products[i], current: cnt}
        this.setState({products})
    }

    remove = (i) => {
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
            case 'CART':
                page = <Cart
                    products={this.state.products}
                    onChange={this.changeCnt}
                    onRemove={this.remove}
                    onSend={this.moveToOrder}
                />
                break;

            case 'ORDER':
                page = <Order
                    formData={this.state.formData}
                    onChange={() => {}}
                    onSend={this.moveToResult}
                    onBack={this.moveToCart}
                />
                break;

            case 'RESULT':
                page = <Result/>
                break;
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
