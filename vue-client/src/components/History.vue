<template>
    <div>
        <h3>History</h3>
        <ul class="list">
            <li v-for="(t, index) in transactions" :key="index" :class="t.amount > 0 ? 'plus' : 'minus'">
                {{t.text}}
                <span>{{t.amount > 0 ? '+' : '-'}}${{Math.abs(t.amount)}}</span>
                <button class="delete-btn" @click="removeTransaction(t._id)">x</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    methods: {
        ...mapActions(['deleteTransaction', 'loadTransactions']),
        removeTransaction(id) {
            this.deleteTransaction(id)
        }
    },
    computed: {
        ...mapGetters(['transactions'])
    },
    mounted() {
        this.loadTransactions()
    },
}
</script>