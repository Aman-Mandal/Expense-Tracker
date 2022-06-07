import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from '../UI/Card'

const ExpenseItem = props => {
  // Note :

  // useState hook returns an array of [initial_value, setValue()]
  // then we can use the setValue('text') for updating UI
  // whenever the setValue() is called .. the whole Component will be called again,
  // that's how we can see the Updated UI

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem
