const Engineer = require('../lib/Engineer');

//engineer object test 
test('creates a engineer object', () => {
    const engineer = new Engineer('Diane', 1, '', '');
    
    expect(engineer.github).toEqual(expect.any(String));
});

//GitHub value test - checks for a string
test('gets engineer github value', () => {
    const engineer = new Engineer('Diane', 1, '', '');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

//engineer role teest - checks for a role value of 'engineer'
test('gets employee role value', () => {
    const engineer = new Engineer('Diane', 1, '', '');

    expect(engineer.getRole()).toEqual("Engineer");
});