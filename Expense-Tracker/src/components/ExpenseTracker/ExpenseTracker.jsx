import React, { useState,useEffect } from "react";
import Chart from "../chart/Chart";
import './ExpenseTracker.css';
function ExpenseTracker() {

	const [expenseList, setExpenseList] = useState([{
		description: 'Dinner',
		category: 'food',
		amount: 12.50
	},
	{
		description: 'Taxi fare',
		category: 'transport',
		amount: 4.99
	}]);
	const [description,setDescription]=useState("");
	const [category,setCategory]=useState("others");
	const [amount,setAmount]=useState(0.00);
	const [totalExpense,setTotalExpense] =useState(0.00);
	useEffect(()=>{
		calculate();
	},[expenseList]);
	function handleDescription(e)
	{
		setDescription(e.target.value);
	}
	function handelCategory(e)
	{
		setCategory(e.target.value);
	}
	function handleAmount(e)
	{
		setAmount(e.target.value);
	}
	function addExpenseList()
	{
		const newExpenseList={
			description,
			category,
			amount:parseFloat(amount),
		};
		setExpenseList([...expenseList,newExpenseList]);

	
	}
	function deleteExpenseList(index)
	{
		const newExpenseList = expenseList.filter((_,i)=>i!==index)
		setExpenseList(newExpenseList);
	}
	function calculate()
	{
		let sum=0;
		expenseList.forEach((object,i)=>{
			sum+=object.amount;
		});
		setTotalExpense(sum);
		
	}

	return (
		<div className="expense-tracker">
			<div className="header">
				<div>Description</div>
				<div>Category</div>
				<div>Amount</div>
			</div>
			<div className="expense-list">
				<ol>
					{expenseList.map((object, index) => (
						<li className="list" key={index}>
							<div>{object.description}</div>
							<div>{object.category}</div>
							<div>${object.amount}</div>
							<button className="delete-button" onClick={()=>deleteExpenseList(index)}>Delete</button>
						</li>
					))}
				</ol>

			</div>
			<div className="input">
				<input type="text" className="decription-input" onChange={handleDescription}/>

				<select name="category" id="category"
				onChange={handelCategory} className="category-input">
					<option value="others">Others</option>
					<option value="food">Food</option>\
					<option value="cloths">Cloths</option>
					<option value="transport">Transport</option>
					
				</select>
				<input type="number" onChange={handleAmount} className="amount-input"
				min="0.0"/>
				<button onClick={addExpenseList} className="add-button">Add</button>
			</div>
				<div className="display-total" onClick={calculate}>Total: ${totalExpense.toFixed(2)}</div>

			<Chart expenseList={expenseList} totalExpense={totalExpense}/>
		</div>
	);
}

export default ExpenseTracker