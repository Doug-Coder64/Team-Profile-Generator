const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const employees = [];

function htmlRoster() {
    
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
                    ${getEmployeeCards()}
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
            name: "special", 
            },
            {
                type: "list",
                message: "Are you wanting to add more Employees?",
                choices: ["Yes", "No"],
                name: "addEmployees"
            }
        ]).then(function({special, addEmployees}){
            
            if(addEmployees) getEmployees();
        })

    })
}

function createEmployees() {

}

getEmployees();
