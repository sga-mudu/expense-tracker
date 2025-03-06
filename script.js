
let expenses = [];
const expenseInput = document.getElementById("expense"); 
const amountInput = parseFloat(document.getElementById("amount"));
const expenseList = document.getElementById("expense-list");
const expenseButton = document.getElementById("add-expense");
// const deleteButton = document.querySelector(".delete-btn");
let index = 0;



const addExpense = () =>{
    const description = expenseInput.value.trim();
    const amount = parseFloat(document.getElementById("amount").value);

    if(description === "" || amount <= 0 || isNaN(amount)){
        alert("Please write something!");
        return;
    }

    expenses.push({description, amount});

    expenseInput.value = "";
    document.getElementById("amount").value = "";
    console.log(expenses);

    renderExpenses();

};

const deleteExpense = (index) =>{
    expenses.splice(index, 1);
    renderExpenses();
}

const renderExpenses = () =>{
    const totalElement = document.getElementById("total");

    expenseList.innerHTML = "";

    let total = 0;
    expenses.forEach((expense, index) => {
        total += expense.amount;

        const expenseItem = document.createElement("li");
        expenseItem.classList.add("list-of-expense");
        expenseItem.innerHTML = `
            <span>${expense.description} - ${expense.amount}</span>
            <button class="delete-btn">Delete</button>
        `
        expenseList.appendChild(expenseItem);

        const deleteButton = expenseItem.querySelector(".delete-btn");
        deleteButton.addEventListener("click", () => deleteExpense(index));
    });

    totalElement.innerText = total;
}

expenseButton.addEventListener("click", addExpense);

