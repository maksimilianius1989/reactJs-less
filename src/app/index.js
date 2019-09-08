import React from 'react'
import style from './app-module.css'
import router from '~s/router'

export default class extends React.Component {
    render() {
        return (
            <div className="container">
                <button onClick={() => this.forceUpdate()}>Upd</button>
                <br/>
                {router.component}
            </div>
        )
    }
}
