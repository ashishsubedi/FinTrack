import { getExpenses, recordExpense } from './helpers';

Actions = () => {
    const addExpense = ({ value, amount, date }) => {
        const last = getExpenses()[0];
        const highestId = last == null ? 0 : last.id;
        const id = highestId == null ? 1 : highestId + 1;
        const data = {
            id,
            category: value,
            amount,
            date
        };
        recordExpense(data);
    }
}

export default Actions;
