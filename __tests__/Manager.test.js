const Manager = require('../lib/Manager');

//manager object test 
test('creates a manager object', () => {
    //name, id, email, office #
    const manager = new Manager('Diane', 1, '', 21);
    //ecpect office # to be any number 
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

//employee role value test - cheecks for value of 'Manager'
test('gets employee role value', () => {
    const manager = new Manager('Diane', 1, '');

    expect(manager.getRole()).toEqual("Manager");
}); 