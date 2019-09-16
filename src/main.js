import React from 'react'
import ReactDom from 'react-dom'
import App from './app'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from 'mobx-react'
import store from '~s'

store.products.load().then(() => {
    ReactDom.render(
        <Provider stores={store}>
            <App/>
        </Provider>,
        document.querySelector('#app')
    )

    store.notifications.add('Some test 1')
    store.notifications.add('Some test 2')
    store.notifications.add('Some test 3')
})

store.cart.load()