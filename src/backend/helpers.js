import getRealm from '../services/realm';


const recordExpense = async (data) => {
    try {
        const realm = await getRealm();
        realm.write(() => {
            realm.create('Expense', data);
        });
    } catch (e) {
        throw new Error('Error');
    }
};

const recordIncome = async (data) => {
    try {
        const realm = await getRealm();
        realm.write(() => {
            realm.create('Income', data);
        });
    } catch (e) {
        throw new Error('Error');
    }
};
const recordBudget = async (data) => {
    try {
        const realm = await getRealm();
        realm.write(() => {
            realm.create('Budget', data);
        });
    } catch (e) {
        throw new Error('Error');
    }
};

//Expense Datas

//Returns a Expense

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
        let expenseByCategory = expenses.filtered('category == $0',category).sorted('date',true);
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
        let expenseByDate = expenses.filtered('date == $0',date).sorted('date',true);
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
        let expenseByAmount = expenses.filtered('amount == $0',amount).sorted('date',true);
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
        let expenseByAmount = expenses.sorted('amount',true);
        return expenseByAmount;

    } catch (e) {
        throw new Error('Error');
    }
}; 


//Income Datas

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
        let IncomeByCategory = Incomes.filtered('category == $0',category).sorted('date',true);
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
        let IncomeByDate = Incomes.filtered('date == $0',date).sorted('date',true);
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
        let IncomeByAmount = Incomes.filtered('amount == $0',amount).sorted('date',true);
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
        let IncomeByAmount = Incomes.sorted('amount',true);
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
        let budget = realm.objects('Budget').filtered('date = $0',date);
        return budget;

    } catch (e) {
        throw new Error('Error');
    }
}; 

export {
    recordExpense, recordBudget, recordIncome,
    getExpenseById, getExpenseByAmount,getExpenseByCategory,getExpenseByDate,getExpenseByHighestAmount,
    getIncomeById, getIncomeByAmount, getIncomeByCategory, getIncomeByDate, getIncomeByHighestAmount,
    getBudget
}