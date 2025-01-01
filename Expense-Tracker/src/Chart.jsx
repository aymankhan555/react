import { useEffect, useState } from "react";


function Chart({ expenseList, totalExpense }) {

    const [expenseCategory, setExpenseCategory] = useState({
        food: 0,
        cloths: 0,
        transport: 0,
        others: 0
    });

    useEffect(() => {
        let updatedCategory = { food: 0, cloths: 0, transport: 0, others: 0 };
        expenseList.forEach((item) => {
          if (item.category in updatedCategory) {
            updatedCategory[item.category] += item.amount; 
          }
        });
        setExpenseCategory(updatedCategory);
      }, [expenseList]);
      const foodPercentage = (expenseCategory.food / totalExpense) * 100 || 0;
    const transportPercentage = (expenseCategory.transport / totalExpense) * 100 || 0;
    const clothsPercentage = (expenseCategory.cloths / totalExpense) * 100 || 0;
    const othersPercentage = (expenseCategory.others / totalExpense) * 100 || 0;

    const chartStyle = {
        background: totalExpense
          ? `conic-gradient(
              tomato 0% ${foodPercentage}%,
              lightblue ${foodPercentage}% ${foodPercentage + clothsPercentage}%, 
              lightgreen ${foodPercentage + clothsPercentage}% ${foodPercentage + clothsPercentage + transportPercentage}%, 
              orange ${foodPercentage + clothsPercentage + transportPercentage}% ${foodPercentage + clothsPercentage + transportPercentage + othersPercentage}%
            )`
          : "grey",
    };
    return (
        <div className="chart-container">
            <div className="chart" style={chartStyle}>
            </div>
        </div>

    );
}
export default Chart