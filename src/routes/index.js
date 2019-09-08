import Order from '~p/order'
import Cart from '~p/cart'
import Result from '~p/result'
import E404 from '~p/error404'

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
    },
    {
        url: '**',
        component: E404,
    },
]

let routesMap = {}

routes.forEach((route) => {
    if (route.hasOwnProperty('name')) {
        routesMap[route.name] = route.url
    }
})

export default routes
export {routesMap}