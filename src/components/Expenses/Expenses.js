import { useState } from 'react'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import './Expenses.css'
import ExpensesList from './ExpensesList'

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2022')

  const filterYearHandler = inputYear => {
    setFilteredYear(inputYear)
  }

  const filteredExpenses = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onSaveFilterYear={filterYearHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses
