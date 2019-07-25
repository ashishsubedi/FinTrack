import getRealm from '../services/realm';
// import console = require('console');
// import console = require('console');


const recordExpense = async (data) => {
    try {
        const realm = await getRealm();
        realm.write(() => {
            realm.create('Expense', data, true);
        });
        return realm;
        
    } catch (e) {
        throw new Error('Record Expense Error: ',e,'  End');
        
    }
};

const recordIncome = async (data) => {
    try {
        const realm = await getRealm();
        realm.write(() => {
            realm.create('Income', data, true);
        });
        return realm;

    } catch (e) {
        throw new Error('Error');
        
    }
};
const recordBudget = async (data) => {
    try {
        const realm = await getRealm();
        console.log(data)
        realm.write(() => {
            realm.create('Budget', data, true);
        });
        return realm;

    } catch (e) {
        throw new Error('Record BUdget Error');
        
    }
};

const recordCategory = async (data) => {
    try {
        const realm = await getRealm();
        realm.write(() => {
            realm.create('Category', data, true);
        });
        return realm;
        
    } catch (e) {
        throw new Error('Error');
        
    }
};


const getCategoriesCount = async ()=>{

    try {
        const realm = await getRealm();
        return realm.objects('Category').length;
        
       
        
    } catch (e) {
        throw new Error('Categories Count Error');
        
    }
}

const getCategoryByValue =  async (value) =>{
    try{
        const realm = await getRealm();
        
        const res =  realm.objects('Category').filtered('name == $0',value);
       
        return res[0];
    }
    catch (e) {
        throw new Error('Error');
    }
}
//Expense Datas

//Returns a Expense

const getExpenses = async () => {
    try {
        const realm = await getRealm();
        let expense =  realm.objects('Expense');
        if(expense.length > 0)
            expense = expense.sorted('date',true)
        return expense;

    } catch (e) {
        throw new Error('Get Expense Error');
        
    }
};

const getExpenseById = async (id) => {
    try {
        const realm = await getRealm();
        let expenseById = realm.objectForPrimaryKey(id);
        return expenseById;

    } catch (e) {
        throw new Error('Error');
    }
};

//Returns Lists of Expenses by category in desc.
const getExpenseByCategory = async (category) => {
    try {
        const realm = await getRealm();
        let expenses = realm.objects('Expense');
        let expenseByCategory = expenses.filtered('category == $0', category).sorted('date', true);
        return expenseByCategory;

    } catch (e) {
        throw new Error('Error');
    }
};

//Returns Lists of Expenses by date in desc
const getExpenseByDate = async (date) => {
    try {
        const realm = await getRealm();
        let expenses = realm.objects('Expense');
        let expenseByDate = expenses.filtered('date == $0', date).sorted('date', true);
        return expenseByDate;

    } catch (e) {
        throw new Error('Error');
    }
};

//Returns Lists of Expenses by amount in desc

const getExpenseByAmount = async (amount) => {
    try {
        const realm = await getRealm();
        let expenses = realm.objects('Expense');
        let expenseByAmount = expenses.filtered('amount == $0', amount).sorted('date', true);
        return expenseByAmount;

    } catch (e) {
        throw new Error('Error');
    }
};

//Returns Lists of Expenses by highest amount

const getExpenseByHighestAmount = async () => {
    try {
        const realm = await getRealm();
        let expenses = realm.objects('Expense');
        let expenseByAmount = expenses.sorted('amount', true);
        return expenseByAmount;

    } catch (e) {
        throw new Error('Error');
    }
};


//Income Datas

const getIncomes = async (id) => {
    try {
        const realm = await getRealm();
        let income =  realm.objects('Income');
        if(income.length > 0)
            income = income.sorted('date',true)
        return income;

    } catch (e) {
        throw new Error('Error');
    }
};

//Returns a Income

const getIncomeById = async (id) => {
    try {
        const realm = await getRealm();
        let IncomeById = realm.objectForPrimaryKey(id);
        return IncomeById;

    } catch (e) {
        throw new Error('Error');
    }
};

//Returns Lists of Incomes by category in desc.
const getIncomeByCategory = async (category) => {
    try {
        const realm = await getRealm();
        let Incomes = realm.objects('Income');
        let IncomeByCategory = Incomes.filtered('category == $0', category).sorted('date', true);
        return IncomeByCategory;

    } catch (e) {
        throw new Error('Error');
    }
};

//Returns Lists of Incomes by date in desc
const getIncomeByDate = async (date) => {
    try {
        const realm = await getRealm();
        let Incomes = realm.objects('Income');
        let IncomeByDate = Incomes.filtered('date == $0', date).sorted('date', true);
        return IncomeByDate;

    } catch (e) {
        throw new Error('Error');
    }
};

//Returns Lists of Incomes by amount in desc

const getIncomeByAmount = async (amount) => {
    try {
        const realm = await getRealm();
        let Incomes = realm.objects('Income');
        let IncomeByAmount = Incomes.filtered('amount == $0', amount).sorted('date', true);
        return IncomeByAmount;

    } catch (e) {
        throw new Error('Error');
    }
};

//Returns Lists of Incomes by highest amount

const getIncomeByHighestAmount = async () => {
    try {
        const realm = await getRealm();
        let Incomes = realm.objects('Income');
        let IncomeByAmount = Incomes.sorted('amount', true);
        return IncomeByAmount;

    } catch (e) {
        throw new Error('Error');
    }
};

//Budget Management

//Return budget created on certain date
const getBudget = async (date) => {
    try {
        const realm = await getRealm();
        let budget = realm.objects('Budget').filtered('date = $0', date);
        return budget;

    } catch (e) {
        throw new Error('Budget Error');
    }
};

const getBudgets = async () => {
    try {
        const realm = await getRealm();
        let budget = realm.objects('Budget');
         console.log(budget);
        if(budget.length > 0)
            budget = budget.sorted('createdDate',true);
        return budget;

    } catch (e) {
        throw new Error('Getting Budget Error');
    }
};

export {
    recordExpense, recordBudget, recordIncome, getCategoriesCount, recordCategory,getCategoryByValue,
    getExpenseById, getExpenseByAmount, getExpenseByCategory, getExpenseByDate, getExpenseByHighestAmount,
    getIncomeById, getIncomeByAmount, getIncomeByCategory, getIncomeByDate, getIncomeByHighestAmount,
    getBudget, getExpenses, getIncomes,getBudgets
}