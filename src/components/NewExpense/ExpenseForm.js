import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = props => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  // ---------- Using Single state for Multiple States ----------
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: '',
  //   })

  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value)

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // })
    // setUserInput(prevState => {
    //   return { ...prevState, enteredTitle: event.target.value }
    // })
  }

  const amountChangeHandler = event => {
    setEnteredAmount(event.target.value)

    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // })
    // setUserInput(prevState => {
    //   return { ...prevState, enteredAmount: event.target.value }
    // })
  }

  const dateChangeHandler = event => {
    setEnteredDate(event.target.value)

    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // })
    // setUserInput(prevState => {
    //   return { ...prevState, enteredDate: event.target.value }
    // })
  }

  const submitFormHandler = event => {
    event.preventDefault()

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }

    // From 'ExpenseForm' to 'NewExpense'  (children to parent)
    props.onSaveExpenseData(expenseData)

    // Two-Way binding : Resetting the value of the input fields, by using the 'value' attribute
    //                   which overrides the value by user after form is submitted
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }

  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2022-07-01"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
