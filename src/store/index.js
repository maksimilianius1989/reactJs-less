import cartStore from './cart'
import productStore from './products'
import orderStore from './order'

class RootStore {
    constructor() {
        this.cart = new cartStore(this);
        this.products = new productStore(this);
        this.order = new orderStore(this);
    }
}

export default new RootStore()