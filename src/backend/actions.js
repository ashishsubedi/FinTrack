import { getExpenses, recordExpense, getIncomes, recordIncome, recordBudget } from './helpers';

Actions = () => {
    const addExpense = ({ value, amount }) => {
        const last = getExpenses()[0];
        const highestId = last == null ? 0 : last.id;
        const id = highestId == null ? 1 : highestId + 1;
        const data = {
            id,
            category: value,
            amount,
            date: Date.now()
        };
        recordExpense(data);
    };

    const addIncome = ({ value, amount }) => {
        const last = getIncomes()[0];
        const highestId = last == null ? 0 : last.id;
        const id = highestId == null ? 1 : highestId + 1;
        const data = {
            id,
            category: value,
            amount,
            date : Date.now()
        };
        recordIncome(data);
    };

    const addBudget = ({ value, amount, timeInterval }) => {
        const last = getIncomes()[0];
        const highestId = last == null ? 0 : last.id;
        const id = highestId == null ? 1 : highestId + 1;
        const data = {
            id,
            category: value,
            amount,
            date: Date.now(),
            timeInterval
        };
        recordBudget(data);
    };

    const addCategory = ({ name, icon }) => {
        const last = getIncomes()[0];
        const highestId = last == null ? 0 : last.id;
        const id = highestId == null ? 1 : highestId + 1;
        const data = {
            id,
            name,
            icon
        };
        recordCategory(data);
    };

    
}

export default Actions;
