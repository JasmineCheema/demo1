import './ExpenseItem.css'
import './ExpenseDate'
import ExpenseDate from './ExpenseDate'
function ExpenseItem(props){
  
    return(
        <div className='expense-item'>
           <ExpenseDate dt={props.dt}/>
            <div className='expense-item_description'>
              <h2>{props.t1}</h2>
              <div className='expense-item__price'>{props.amt}</div>
            </div>
        </div>
    )
}
export default ExpenseItem