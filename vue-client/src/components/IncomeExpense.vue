<template>
    <div>
        <div class="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p class="money plus">${{income}}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p class="money minus">${{expense}}</p>
            </div>
        </div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({transactions: 'transactions'}),
        income() {
            const amounts = this.transactions.map(t => t.amount)
            return amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
        },
        expense() {
            const amounts = this.transactions.map(t => t.amount)
            return (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);
        }
    }
}
</script>