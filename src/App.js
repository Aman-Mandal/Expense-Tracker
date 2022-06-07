import NewExpense from './components/NewExpense/NewExpense'
import Expenses from './components/Expenses/Expenses'
import React from 'react'

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Electricity Bill',
      amount: 94.12,
      date: new Date(2022, 5, 5),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2022, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: 'e4',
      title: 'Laptop',
      amount: 450,
      date: new Date(2022, 4, 12),
    },
  ]

  // Children-Parent Communication
  const addExpenseHandler = expense => {
    console.log('In App.JS')
    console.log(expense)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  )

  /*
  Under the Hood .. React works like this ..JSX is just a syntatic sugar

  return React.createElement(
    'div',
    {},
    React.createElement('h3', {}, 'Starting OFF!!'),
    React.createElement(Expenses, { item: expenses })
  )

  */
}

export default App
