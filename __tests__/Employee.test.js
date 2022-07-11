/*  Tests 
name 
id  - assign a number 
email 
role -- returns employee
*/


const Employee = require('../lib/Employee.js');


//employee object test with properties checks 
test('creates a employee object', () => {
    const employee = new Employee('Diane', 1, 'fake@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    
});

//employee name test- a string that has a length greter than zero(empty).
test('gets employee name value', () => {
    const employee = new Employee('Diane', 1, 'fake@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.name.length).toBeGreaterThan(0);
});

//employee id test- checks for a number 
test('gets employee ID value', () => {
    const employee = new Employee('Diane', 1, 'fake@gmail.com');
    
    expect(employee.getId()).toEqual(expect.any(Number));
});

//employee email test - checks for a string 
test('gets employee email value', () => {
    const employee = new Employee('Diane', 1, 'fake@gmail.com');
    
    
    expect(employee.email).toEqual(expect.stringContaining(employee.email.toString()));
});

//employee role test - checks employee role value for 'Employee'
test('gets employee role value', () => {
    const employee = new Employee('Diane', 1, 'fake@gmail.com');
    
    expect(employee.getRole()).toEqual("Employee");
});