import Cart from '~p/cart'
import Order from '~p/order'
import Result from '~p/result'

class Router {
    routes = {
        cart: () => <Cart/>,
        order: () => <Order/>,
        result: () => <Result/>
    }

    activeRoute = 'cart'
}

export default new Router()
