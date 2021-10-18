const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

//contains each card of employees added
const employees = [];

function htmlRoster() {
    let employeesCards = "";

    //merges all employee cards into a big string of HTML 
    for (let i = 0; i < employees.length; i++) {
        employeesCards += employees[i];
    }

    //HTML that will fill with all the employees
    const roster  = 
    `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link 
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" 
            rel="stylesheet" 
            integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" 
            crossorigin="anonymous"
            />
            <title>Team Profile</title>
        </head>
        <body>
            <nav class="navbar navbar-dark" style="background-color: red"><div class="h2 mx-auto text-center">My Team</div></nav>
            <div class="container">
                <div class="row">
                    ${employeesCards}
                </div>
            </div>
        </body>
    </html>`;

    createHTMLFile(roster);
}

//function that writes HTML File into /dist
function createHTMLFile(html) {
    fs.writeFile("./dist/index.html", html, function(err) {
        if(err) console.error(err);
    });
}

//Inquirer call and response to have user enter all employees 
function getEmployees() {
    inquirer.prompt([{
        message: 'Please Enter the Team Members Name:',
        name: 'name',
    },
    {
        type: 'list',
        message: 'Please select the Team members Role',
        choices: ["Manager", "Engineer", "Intern"],
        name: 'role'
    },
    {   
        message: "Please Enter Team Members ID:",
        name: 'id'
    },
    {
        message: "Please Enter Team Members Email:",
        name: 'email',
    }]).then(({name, role, id, email}) => {
        let special = "Please enter the employee's ";
        //Adds string to speical to be used later for validation
        switch(role){
            case "Manager":
                special += "Office Number";
                break;
            case "Intern":
                special += "School";
                break;
            case "Engineer":
                special += "GitHub Username";
                break;
        }

        //Inquirer to get special information for employee and checks if there are more employees to be added
        inquirer.prompt([
            {
            message: special,
            name: "roleSpecial", 
            },
            {
                type: "list",
                message: "Are you wanting to add more Employees?",
                choices: ["Yes", "No"],
                name: "addEmployees"
            }
        ]).then(function({roleSpecial, addEmployees}){
            let employee;
            switch (role) {
                case "Manager":
                    employee = new Manager(name, id, email, roleSpecial);
                    break;
                case "Engineer":
                    employee = new Engineer(name, id, email, roleSpecial);
                    break;
                case "Intern":
                    employee = new Intern(name, id, email, roleSpecial);
                    break;
            }
            createEmployeeCard(employee);
            if(addEmployees === "Yes"){
                getEmployees();
            } else {
                htmlRoster();
            }
        })

    })
}

//Creates emmployee card and fills it based on their role
function createEmployeeCard(employee) {
        let speicalInfo;
        switch(employee.getRole()) {
            case "Manager":
                specialInfo = `Office Number: ${employee.getOfficeNumber()}`;
                break;
            case "Engineer":
                specialInfo = `Github: <a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a>`;
                break;
            case "Intern":
                specialInfo = `School: ${employee.getSchool()}`;
                break;
        }
        
        let card = 
        `<div class="col-4 m-2">
            <div class="card" style="width:18rem;">
                <div class="card-body">
                    <h5 class="card-title">${employee.getName()}</h5> 
                    <h6 class="card-subtitle">${employee.getRole()}</h6>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${employee.getId()}</li>
                        <li class="list-group-item"><a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                        <li class="list-group-item">${specialInfo}</li>
                    </ul>
                </div>
            </div>
        </div>`

        employees.push(card);
}

getEmployees();