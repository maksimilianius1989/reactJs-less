import React from 'react'
import E404 from '~c/errors/404'
import {Link} from "react-router-dom"
import {routesMap} from "~/routes"
import ProductItem from "~c/products/item"
import {inject, observer} from "mobx-react"


@inject('stores') @observer class Product extends React.Component{
    render() {
        let id = this.props.match.params.id
        let product = this.props.stores.products.getById(id)
        let cart = this.props.stores.cart

        if (product === null) {
            return <E404 />
        }
        else {
            return <ProductItem
                        title={product.title}
                        price={product.price}
                        backUrl={routesMap.home}
                        inCart={cart.inCart(id)}
                        onAdd={() => cart.add(id)}
                        onRemove={() => cart.remove(id)}
                    />
        }
    }
}

export default Product