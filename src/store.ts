import { createStore } from 'vuex';

export interface menuItem {
    name: string
    selection: string
    quantity: number
    price: number
}

export interface State {
    customerOrder: menuItem[]
}

export default createStore<State>({
    state: {
        customerOrder: []
    },
    mutations: {
        addOrder(state, order: menuItem) {
            state.customerOrder.push(order);
        }
    },
    getters: {
        getCustomerOrder: (state) => state.customerOrder
    }
})