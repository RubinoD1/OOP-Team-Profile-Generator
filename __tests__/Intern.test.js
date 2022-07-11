//   ('Diane', 1, 'Fake@gmail.com', 'DianeGitHub');

const Intern = require('../lib/Intern');

 
test('creates an Intern object', () => {
    const intern = new Intern('Diane', 1, 'Fake@gmail.com', 'Miskatonic University');
    
    expect(intern.school).toEqual(expect.any(String));
});


test('gets employee school', () => {
    const intern = new Intern('Diane', 1, 'Fake@gmail.com', 'Miskatonic University');
    
    expect(intern.getSchool()).toEqual(expect.any(String));
});


test('gets role of employee', () => {
    const intern = new Intern('Diane', 1, 'Fake@gmail.com', 'Miskatonic University');
    expect(intern.getRole()).toEqual("Intern");
}); 