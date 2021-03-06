import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const { addIncome ,addExpense } = useContext(GlobalContext);
  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: null,
  });
  const [expense, setExpense] = useState({
    expenseText: "",
    expenseAmount: null,
  });
  const { incomeText, incomeAmount } = income;
  const { expenseText, expenseAmount } = expense;

  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  };
  const onChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };
  const onSubmitIncome = (e) => {
    e.preventDefault();
    if(incomeText!==""){
      const newIncomeTransaction = {
        id: uuidv4(),
        incomeText,
        incomeAmount: incomeAmount * 1,
      };
      addIncome(newIncomeTransaction);
      setIncome({
        incomeText:"",
        incomeAmount:null
      });
    }
    
  };

  const onSubmitExpense = (e) => {
    e.preventDefault();
    if(expenseText!==""){
      const newExpenseTransaction = {
        id: uuidv4(),
        expenseText,
        expenseAmount: expenseAmount * 1,
      };
      addExpense(newExpenseTransaction);
      setExpense({
        expenseText:"",
        expenseAmount:null
      })
    }
  };


  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmitIncome}>
        <div className="input-group income">
          <input
            type="text"
            value={incomeText}
            name="incomeText"
            placeholder="Add Income.."
            autoComplete="off"
            onChange={onChangeIncome}
          />
          <input
            type="number"
            value={incomeAmount}
            name="incomeAmount"
            placeholder="Amount"
            autoComplete="off"
            onChange={onChangeIncome}
          />
          <input type="submit" value="submit" />
        </div>
      </form>

      <form onSubmit={onSubmitExpense}>
        <div className="input-group expense">
          <input
            type="text"
            value={expenseText}
            name="expenseText"
            placeholder="Add Expense.."
            autoComplete="off"
            onChange={onChangeExpense}
          />
          <input
            type="number"
            value={expenseAmount}
            name="expenseAmount"
            placeholder="Amount"
            autoComplete="off"
            onChange={onChangeExpense}
          />
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
