const sum = require('./sum');
let faker_factory = require('./faker_factory');
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
});
test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});
test('check faker_factory.generatorUsers', () => {
    let users = faker_factory.generatorUsers(5);
    expect(users.length).toBe(5);
});
