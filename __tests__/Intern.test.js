const Intern = require('../lib/Intern');

 //Intern object test 
test('creates a intern object', () => {
    const intern = new Intern('Diane', 1, '', '');
    
    expect(intern.school).toEqual(expect.any(String));
});

// school value test - checks for a string 
test('gets employee school value', () => {
    const intern = new Intern('Diane', 1, '', '');
    
    expect(intern.getSchool()).toEqual(expect.any(String));
});

//Intern role test - checks for a value of 'Intern'
test('gets employee role value', () => {
    const intern = new Intern('Diane', 1, '', '');
    
    expect(intern.getRole()).toEqual("Intern");
}); 