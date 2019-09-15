import React from 'react'
import {Link} from "react-router-dom"
import {routesMap, urlBuilder} from "~/routes"
import withStore from '~/hocs/withStore'

class Result extends React.Component{
    render(){
        let data = this.props.stores.order.lastOrderCache

        return (
            <div>
                <h2>Congratulations!</h2>
                <p>Hi, {data.name}!</p>
                <p><strong>Total: {data.total}</strong></p>
                <div>

                </div>
            </div>
        )
    }
}

export default withStore(Result)