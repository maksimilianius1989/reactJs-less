import React from 'react'
import styles from './app.module.css'
import router from '~s/router'
import {observer} from 'mobx-react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Order from '~p/order'
import Cart from '~p/cart'
import Result from '~p/result'

@observer class App extends React.Component{
    render(){
        return (
            <Router>
                <div className="container">
                    <Route path="/" component={Cart} exact={true} />
                    <Route path="/order" component={Order} exact={true} />
                    <Route path="/result" component={Result} exact={true} />
                </div>
            </Router>
        )
    }
}

export default App