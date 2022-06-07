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

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onSaveFilterYear={filterYearHandler}
        />
        {props.item.map(expense => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  )
}

export default Expenses
