import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false);
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };
  const startEditngHandler = () =>{
    setIsEditing(true);
  }
  const StopEditingHandler = () => {
    setIsEditing(false);
  }
  return (
    
    <div className="new-expense">
      {!isEditing && <button onClick={startEditngHandler}>Add new Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={StopEditingHandler}/>}
    </div>
    )
};

export default NewExpense;
