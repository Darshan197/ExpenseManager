<template>
    <div>
        <h4>Your Balance</h4>
        <h1>${{total}}</h1>
    </div>
</template>

<script>
export default {
    computed: {
        total() {
            const transactions = this.$store.state.transactions
            const amount = transactions.map(t => t.amount)
            return amount.reduce((acc,item) => (acc += item), 0).toFixed(2)
        }
    }
}
</script>