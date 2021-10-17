const Engineer = require('../lib/Engineer.js');

test("Test get role method", () => {
    const engineer  = new Engineer('dave', 1, 'dave@co.com', 'dave-user');
    expect(engineer.getRole()).toEqual("Engineer");
});

test("Tests the get Github username method", () => {
    const engineer = new Engineer('dave', 1, 'dave@co.com', 'dave-user');
    expect(engineer.getGithub()).toEqual('dave-user');
});