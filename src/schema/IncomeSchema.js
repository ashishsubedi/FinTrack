export default class IncomeSchema{
    static schema = {
        name: 'Income',
        primaryKey: 'id',
        properties:{
            id: 'int',
            note: 'string',
            category : 'Category',
            amount: {type: 'float', default: 0},
            date: 'date'
        }
    };
}

