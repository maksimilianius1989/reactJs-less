import React from 'react'
import {Link} from "react-router-dom"
import {routesMap} from "~/routes"

export default function (props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <hr/>
            <div>
                <strong>Price: {props.price}</strong>
            </div>
            <Link to={props.backUrl}>back to list</Link>
        </div>
    )
}