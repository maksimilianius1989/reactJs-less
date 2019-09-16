import {observable, computed, action} from "mobx"

export default class {
    @observable notification = {}
    _ai = 0

    constructor(rootStore) {
        this.rootStore = rootStore
    }

    @computed get list() {
        return Object.values(this.notification)
    }

    @action add(message, type = 'error', timeToAutoHide = 5000) {
        this.notification[++this._ai] = {
            id: this._ai,
            message,
            type
        }

        if (timeToAutoHide !== null) {
            let carringId = this._ai;

            setTimeout(() => {
                this.remove(carringId)
            }, timeToAutoHide)
        }
    }

    @action remove(id) {
        if (id in this.notification) {
            delete this.notification[id]
        }
    }
}