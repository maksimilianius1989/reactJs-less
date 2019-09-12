import React from 'react'
import {Button} from "react-bootstrap"
import {Link} from "react-router-dom"

export default function (props) {
    let btn;
    if (props.inCart) {
        btn = <Button variant="danger" onClick={props.onRemove}>
            Remove from cart
        </Button>
    }
    else {
        btn = <Button variant="success" onClick={props.onAdd}>
            Add to cart
        </Button>
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <hr/>
            <div>
                <strong>Price: {props.price}</strong>
            </div>
            <Link to={props.backUrl}>back to list</Link>
            <p>Text about product</p>
            {btn}
        </div>
    )
}