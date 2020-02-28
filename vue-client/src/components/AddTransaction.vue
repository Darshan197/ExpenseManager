<template>
    <div>
        <h3>Add new transaction</h3>
        <form @submit.prevent="newTransaction">
            <div class="form-control">
            <label for="text">Text</label>
            <input type="text" placeholder="Enter text..." v-model="transaction.text" />
            </div>
            <div class="form-control">
            <label for="amount">Amount <br />(negative - expense, positive - income)</label>
            <input type="number" placeholder="Enter amount..." v-model="transaction.amount" />
            </div>
            <button class="btn">Add transaction</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            transaction: {
                text: '',
                amount: ''
            }
        }
    },
    methods: {
        ...mapActions(['addTransaction']),
        newTransaction() {
            this.transaction.amount = +this.transaction.amount
            this.addTransaction(this.transaction)
         },
    },
}
</script>