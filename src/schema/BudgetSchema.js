export default class BudgetSchema{
    static schema = {
        name: 'User',
        primaryKey: 'id',
        properties:{
            id: 'int',
            amount: {type: 'int', default: 0},
            timeInteval: 'int',
            createdDate: 'date'
        }
    };
}

