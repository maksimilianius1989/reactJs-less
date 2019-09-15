import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {urlBuilder} from "~/routes"
import {Link} from "react-router-dom"
import styles from "./index.module.css"
import {inject, observer} from "mobx-react"

@inject('stores') @observer class ProductList extends React.Component{
    render() {
        let cartModel = this.props.stores.cart
        let productModel = this.props.stores.products

        let productsCards = productModel.items.map((product) => {
            let btn;
            if (cartModel.inCart(product.id)) {
                btn = <Button
                        variant="danger"
                        onClick={() => cartModel.remove(product.id)}
                        disabled={product.id in cartModel.processId}
                >
                    Remove from cart
                </Button>
            }
            else {
                btn = <Button
                        variant="success"
                        onClick={() => cartModel.add(product.id)}
                        disabled={product.id in cartModel.processId}
                >
                    Add to cart
                </Button>
            }

            return (<div className={"col col-4 " + styles.col} key={product.id}>
                <Card>
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                            <strong>Price: {product.price}</strong>
                        </Card.Text>
                        <Link to={urlBuilder('product', {id: product.id})}>
                            Get more...
                        </Link>
                        <hr/>
                        {btn}
                    </Card.Body>
                </Card>
            </div>)
        })

        return (
            <div>
                <h1>Products page</h1>
                <div className="row">
                    {productsCards}
                </div>
            </div>
        )
    }
}

export default ProductList