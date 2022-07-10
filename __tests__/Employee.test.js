/*  Tests 
name 
id  - assign a number 
email 
role -- returns employee
*/


const Employee = require('../lib/Employee.js');


//employee object test with properties checks 
test('creates a employee object', () => {
    const employee = new Employee('Diane');

    expect(employee.name).toBe('Diane');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toBe('Employee');
});

//employee name check- a string that has a length greter than zero(empty).
test('gets employee name value', () => {
    const employee = new Employee('Diane');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.name.length).toBeGreaterThan(0);
});

//employee id check- checks for a number 
test('gets employee ID value', () => {
    const employee = new Employee('Diane');
    employee.id = 1;

    expect(employee.id).toEqual(expect.any(Number));
});
