export default class ExpenseSchema{
    static schema = {
        name: 'Expense',
        primaryKey: 'id',
        properties:{
            id: 'int',
            category : 'Category',
            amount: {type: 'int', default: 0},
            date: 'date'
        }
    };
}

