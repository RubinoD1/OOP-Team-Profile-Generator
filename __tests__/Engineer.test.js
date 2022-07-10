const Engineer = require('../lib/Engineer');

 
test('creates an Engineer object', () => {
    const engineer = new Engineer('Diane', 1, 'Fake@gmail.com', 'DianeGitHub');
    
    expect(engineer.github).toEqual(expect.any(String));
});


test('gets engineer github value', () => {
    const engineer = new Engineer('Diane', 1, 'Fake@gmail.com', 'DianeGitHub');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

 
test('gets role of employee', () => {
    const engineer = new Engineer('Diane', 1, 'Fake@gmail.com', 'DianeGitHub');

    expect(engineer.getRole()).toEqual("Engineer");
});