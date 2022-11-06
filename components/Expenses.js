import ExpenseItem from "./ExpenseItem"
import './Expenses.css'
function Expenses(props){
return(
    <div className="expenses">
      <ExpenseItem dt={props.item[0].date} amt={props.item[0].amount} t1={props.item[0].title}/>
      <ExpenseItem dt={props.item[1].date} amt={props.item[1].amount} t1={props.item[1].title}/>
      <ExpenseItem dt={props.item[2].date} amt={props.item[2].amount} t1={props.item[2].title}/>
      <ExpenseItem dt={props.item[3].date} amt={props.item[3].amount} t1={props.item[3].title}/>
    </div>
)
}
export default Expenses