import cartStore from './cart'
import productStore from './products'
import orderStore from './order'
import * as products from '~/api/products'
import * as cart from '~/api/cart'

class RootStore {
    constructor() {
        this.api = {
            products,
            cart
        }

        this.storage = localStorage
        this.cart = new cartStore(this);
        this.products = new productStore(this);
        this.order = new orderStore(this);
    }
}

export default new RootStore()