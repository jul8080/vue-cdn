const { createApp, ref } = Vue

createApp({
    template: `
        <div>
        <h1>Hello Vue!</h1>
        <h2>Total Method - {{ getTotal() }}</h2>
        <h2>Computed: Total - {{ total }}$</h2>
        <h2>Total - {{ items.reduce((total, curr) => (total += curr.price), 0)}}$</h2>

        <div v-for="item in items" v-bind:key="item.id">
        <h2 v-if="item.price >= 300">{{ item.product }} {{ item.price }}</h2>
        </div>

        <div v-for="item in expensiveItems" v-bind:key="item.id">
        <h2>Computed - {{ item.product }} {{ item.price }}</h2>
        </div>
        <button v-on:click="items.push({id: 4, product: 'keyboard', price: 900})">Add Item</button>
        </div>
    `,
    data() {
        return {
            items: [
                { id: 1, product: 'TV', price: 540 },
                { id: 2, product: 'Radio', price: 200 },
                { id: 3, product: 'Remote', price: 300 }
            ]
        }
        
    },
    methods: {
        getTotal(){
            return this.items.reduce((total, curr) => (total += curr.price), 0);
        }
    },
    computed: {
        total() {
            return this.items.reduce((total, curr) => (total += curr.price), 0);
        },
        expensiveItems() {
            return this.items.filter(item => item.price > 300)
        }
    }
}).mount('#app')