var faker = require('faker');
function generatorUsers(max) {
    // random generator
    const generator = (schema, min = 1, max) => {
        max = max || min
        return Array.from({ length: max }).map(() => Object.keys(schema).reduce((entity, key) => {
            entity[key] = faker.fake(schema[key])
            return entity
        }, {}))
    };
    // your schema
    const clientsSchema = {
        id: '{{random.number}}',
        first_name: '{{name.firstName}}',
        last_name: '{{name.lastName}}',
        suffix: '{{name.suffix}}',
        avatar: '{{image.avatar}}',
        email: '{{internet.email}}',
        username: '{{internet.userName}}'
    };
    // generate random clients between 5 and 20 units, based on client schema defined above
    const data = generator(clientsSchema, 1, max);
    return data;
}
module.exports = {
    generatorUsers: generatorUsers
};
