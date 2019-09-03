import React from 'react'
import style from './app-module.css'
import Cart from '~p/cart'
import Order from '~p/order'
import Result from '~p/result'

export default class extends React.Component {
    state = {
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

    changeFormDate = (name, value) => {
        let formData = {...this.state.formData}
        formData[name] = {...formData[name], value: value}
        this.setState({formData})
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
                <button onClick={() => this.forceUpdate()}>upd</button>
                <br/>
                {page}
            </div>
        )
    }
}
