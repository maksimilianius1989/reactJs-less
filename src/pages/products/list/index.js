import React from 'react'
import productModel from '~s/products'
import {Card} from 'react-bootstrap'
import {urlBuilder} from "~/routes"
import {Link} from "react-router-dom"
import styles from "./index.module.css"

export default function(props) {
    let productsCards = productModel.items.map((product) => {
        return (<div className={"col col-4" + styles.col} key={product.id}>
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
                </Card.Body>
            </Card>
        </div>)
    })

    return (
        <div className="row">
            {productsCards}
        </div>
    )
}