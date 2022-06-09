import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = props => {
  const [isEditing, setIsEditing] = useState(false)

  const startEditingHandler = () => {
    setIsEditing(true)
  }

  const stopEditingHandler = () => {
    setIsEditing(false)
  }

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    // From New-Expense to App.JS  (child to parent)
    props.onAddExpense(expenseData)
    setIsEditing(false)
  }

  if (!isEditing) {
    return (
      <div className="new-expense">
        <button onClick={startEditingHandler}>Add New Expense</button>
      </div>
    )
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={stopEditingHandler}
      />
    </div>
  )
}

export default NewExpense
