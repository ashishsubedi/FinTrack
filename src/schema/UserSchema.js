export default class UserSchema{
    static schema = {
        name: 'User',
        primaryKey: 'id',
        properties:{
            id: 'int',
            name : 'string',
            balance: {type: 'float', default: 0}
        }
    };
}

