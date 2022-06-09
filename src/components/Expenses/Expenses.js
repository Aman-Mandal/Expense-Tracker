import { useState } from 'react'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterYearHandler = inputYear => {
    setFilteredYear(inputYear)
  }

  const filteredExpenses = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  // If expenses are empty
  let expensesContent = <p>No expenses found</p>

  // if expenses are not empty
  if (filteredYear.length > 0) {
    filteredExpenses.map(expense => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onSaveFilterYear={filterYearHandler}
        />
        {expensesContent}
      </Card>
    </div>
  )
}

export default Expenses
