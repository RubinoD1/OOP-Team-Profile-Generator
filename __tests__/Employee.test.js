/*  Tests 
name 
id  - probably assign a number starting at 1 then adding plus 1 per new employee
email 
role -- returns employee
*/


const Employee = require('../lib/Employee.js');

test('creates a employee object', () => {
    const employee = new Employee('Diane');

    expect(employee.name).toBe('Diane');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toBe('Employee');
});


test('gets employee name value', () => {
    const employee = new Employee('Diane');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.name.length).toBeGreaterThan(0);
});


test('gets employee ID value', () => {
    const employee = new Employee('Diane');
    employee.id = 1;

    expect(employee.id).toEqual(expect.any(Number));
});
