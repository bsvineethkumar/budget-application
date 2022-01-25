import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterAmount, setEnterAmount] = useState("");
  const [pickDate, setPickDate] = useState("");
  /*
const [userInput, setUserInput] = useState({
    enterTitle : '',
    enterAmount : '',
    enterDate : '',
})
 */

  const titlechangeHandler = (event) => {
    /*
      setUserInput({
          ...userInput,
          enterTitle:event.target.value
      })
      setUserInput((prevState)=>{
          return {...prevState, enterTitle: event.target.value};
      })
       */
    setEnterTitle(event.target.value);
  };
  const amountChangleHandler = (event) => {
    /*
      setUserInput({
          ...userInput,
          enterAnount: event.target.value
      })
      setUserInput((prevState)=>{
          return {...prevState, enterAmount: event.target.value};
      })
       */
    setEnterAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    /*
      setuserInput({
          ...userInput,
          enterDate : event.target.value
      })
      setUserInput((prevState)=>{
          return {...prevState, enterDate: event.target.value};
      })
       */
    setPickDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
        title: enterTitle,
        amount : +enterAmount,
        date : new Date(pickDate)
    };
    props.onSaveExpenseData(expenseData);
    setPickDate('');
    setEnterAmount('');
    setEnterTitle('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" 
          onChange={titlechangeHandler} 
          value={enterTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="text"
            min="0.01"
            step="0.01"
            onChange={amountChangleHandler}
            value={enterAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={pickDate}
          />
        </div>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
