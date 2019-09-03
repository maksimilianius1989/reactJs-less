class Cart {
    products = getProducts()

    get total() {
        return this.products.reduce((t, pr) => t + pr.price * pr.current, 0)
    }

    change(i, cnt) {
        this.products[i].current = cnt
    }

    remove(i) {
        this.products.splice(i, 1)
    }
}

export default new Cart()














function getProducts() {
    return [
        {
            id: 100,
            title: 'Iphone 200',
            price: 12000,
            rest: 10,
            current: 1
        },
        {
            id: 101,
            title: 'Samsung 200',
            price: 22000,
            rest: 5,
            current: 1
        }
    ]
}