let budgetValue = 0;
let totalExpensesValue = 0;

const expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

for (let expense of expenseEntries) {
  totalExpensesValue += expense[1];
}

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }
  return totalExpensesValue / expenseEntries.length;
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

// 7.
function updateBalanceColor() {
  let currentBalance = calculateBalance();
  if (currentBalance < 0) {
    balanceColor = "red";
  } else if (currentBalance < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}
// 8.
function calculateCategoryExpenses(categoryName) {
  let total = 0;

  for (let i = 0; i < expenseEntries.length; i++) {
    if (expenseEntries[i][0] === categoryName) {
      total += expenseEntries[i][1];
    }
  }

  return total;
}

//9.

function calculateLargestCategory() {
  let categoriesData = [
    ["groceries"],
    ["restaurants"],
    ["transport"],
    ["home"],
    ["subscriptions"],
  ];

  for (let i = 0; i < categoriesData.length; i++) {
    categoriesData[i].push(calculateCategoryExpenses(categoriesData[i][0]));
  }

  let maxnum = 0;
  let maxCategory = "";

  for (let number of categoriesData) {
    if (number[1] >= maxnum) {
      maxnum = number[1];
      maxCategory = number[0];
    }
  }

  return maxCategory;
}

// 10.
function addExpenseEntry(expense) {
  expenseEntries.push(expense);
  totalExpensesValue += expense[1];
}
