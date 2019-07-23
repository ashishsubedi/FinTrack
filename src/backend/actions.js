import { getExpenses, recordExpense, getIncomes, recordIncome, recordBudget,getCategoryByValue, getCategoriesCount } from './helpers';
import moment from 'moment'
// import console = require('console');

    const addExpense = async ({ value: categoryValue, amount, note }) => {
        
        const res = await getExpenses();
        const category = await getCategoryByValue(categoryValue);
        
        const last = res[0];
        const highestId = last == null ? 0 : last.id;
        const id = highestId == null ? 1 : highestId + 1;

        const data = {
            id,
            note,
            category: category,
            amount: parseFloat(amount),
            date: moment().format()
        }
        
        
        recordExpense(data);
        return data;
    };

    const addIncome = async ({value: categoryValue, amount, note }) => {

        const res = await getExpenses();
        const category = await getCategoryByValue(categoryValue);

        const last = res[0];
        const highestId = last == null ? 0 : last.id;
        const id = highestId == null ? 1 : highestId + 1;

        const data = {
            id,
            note,
            category: category,
            amount: parseFloat(amount),
            date : moment().format()
        };
        recordIncome(data);
        return data;

    };

    const addBudget = async ({ value, amount, timeInterval }) => {
        const last = await getIncomes()[0];
        const highestId = last == null ? 0 : last.id;
        const id = highestId == null ? 1 : highestId + 1;
        const category = await getCategoryByValue(value);

        const data = {
            id,
            category,
            amount: parseFloat(amount),
            date: moment().format(),
            timeInterval
        };
        recordBudget(data);
        return data;

    };

    const addCategory =async ({ name, icon }) => {
        const last = await getCategoriesCount()-1;
        const highestId = last == null ? 0 : last.id;
        const id = highestId == null ? 1 : highestId + 1;
        const data = {
            id,
            name,
            icon
        };
        recordCategory(data);
    };


export {
    addExpense,addIncome,addBudget,addCategory
};
