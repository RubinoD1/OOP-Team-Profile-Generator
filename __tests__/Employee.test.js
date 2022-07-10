/*  Tests 
name 
id  - probably assign a number starting at 1 then adding plus 1 per new employee
email 
role -- returns employee
*/

const Employee = require('../lib/Employee.js');

test('Creates an employee object', () => {
    const employee = new Employee('Diane');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.name.length).toBeGreaterThan(0);
    
});