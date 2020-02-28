<template>
  <div class="container">
    <Header />
    <Balance />
    <IncomeExpense />
    <History />
    <AddTransaction />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header'
import Balance from '../components/Balance'
import IncomeExpense from '../components/IncomeExpense'
import History from '../components/History'
import AddTransaction from '../components/AddTransaction'

export default {
  name: 'Home',
  components: { Header,Balance, IncomeExpense, History, AddTransaction }
}
</script>
