const Intern = require('../lib/Intern.js');

test("Checks that employees school returns correct", () => {
    const intern = new Intern('dave', 1, 'dave@co.com', 'harvard');
    expect(intern.getSchool()).toEqual('harvard');
});

test("Checks that employees role returns as Intern", () => {
    const intern = new Intern('dave', 1, 'dave@co.com', 'harvard');
    expect(intern.getRole()).toEqual('Intern');
});