import React, { useState } from "react";
//import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
//import ExpensesFilter from "./components/NewExpense/ExpenseFilter";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "car Insurance",
    amount: "329.32",
    date: new Date(2022, 2, 12),
  },
  {
    id: "e2",
    title: "New desk",
    amount: "329.32",
    date: new Date(2020, 7, 12),
  },
  {
    id: "e3",
    title: "Bike",
    amount: "32.32",
    date: new Date(2020, 2, 12),
  },
  {
    id: "e4",
    title: "shoes",
    amount: "329.32",
    date: new Date(2021, 6, 12),
  },
];
const RApp = () => {
  const [expenses, setExpense] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpense((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default RApp;
