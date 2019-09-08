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
        name: '404',
        url: '**',
        component: E404,
        exact: true
    },
]

let routesMap = {}

routes.forEach((route) => {
    routesMap[route.name] = route.url
})

export default routes
export {routesMap}