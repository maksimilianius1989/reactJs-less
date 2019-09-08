import Order from '~p/order'
import Cart from '~p/cart'
import Result from '~p/result'

let routes = [
    {
        name: 'home',
        url: '/',
        component: Cart,
        exact: true
    },
    {
        name: 'order',
        url: '/order',
        component: Order,
        exact: true
    },
    {
        name: 'result',
        url: '/done',
        component: Result,
        exact: true
    }
]

let routesMap = {}

routes.forEach((route) => {
    routesMap[route.name] = route.url
})

export default routes
export {routesMap}