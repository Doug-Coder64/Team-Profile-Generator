const Employee = require('../lib/Employee.js');

test('Checks Employees Name, id and email', () => {
    const employee = new Employee('Dave', 1, 'dave@co.com');
    console.log(employee.id);
    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("Checks Employees methods", () => {
    const employee = new Employee('Dave', 1, 'dave@co.com');

    expect(employee.getName()).toEqual('Dave');
    expect(employee.getEmail()).toEqual('dave@co.com');
    expect(employee.getId()).toEqual(1);
    expect(employee.getRole()).toEqual("Employee");
});