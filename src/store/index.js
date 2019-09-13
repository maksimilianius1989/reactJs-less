import cartStore from './cart'
import productStore from './products'
import orderStore from './order'
import * as products from '~/api/products'

class RootStore {
    constructor() {
        this.api = {
            products
        }

        this.cart = new cartStore(this);
        this.products = new productStore(this);
        this.order = new orderStore(this);
    }
}

export default new RootStore()