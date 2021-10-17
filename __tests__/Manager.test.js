const Manager = require('../lib/Manager.js');

test("Verifies Get Role Method of Manager", () => {
    const manager = new Manager('dave', 1, "dave@co.com", "4a");
    expect(manager.getRole()).toEqual("Manager");
});

test("Verifies Get Office Number Method of Manager", () => {
    const manager = new Manager('dave', 1, "dave@co.com", "4a");
    expect(manager.getOfficeNumber()).toEqual("4a");
});