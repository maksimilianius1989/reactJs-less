import React, {useState} from 'react'
import HW1 from './hw/simple'
import HW2 from './hw/input'
import Lazy from './hw/lazy'
import Derived from './hw/deriveds'

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

    render() {
        return (
            <div>
                <h2>Cart</h2>
            </div>
        )
    }
}
