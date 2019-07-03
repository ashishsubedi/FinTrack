export default class CategorySchema{
    static schema = {
        name: 'Category',
        primaryKey: 'id',
        properties:{
            id: 'int',
            name: 'string',
            icon: 'string'
        }
    };
}

