const inquier = require('inquier');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

function htmlRoster() {
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
            <nav class="navbar navbar-dark text-center" style="background-color: red">My Team</nav>
            <div class="container">
                <div class="row">
                    ${getEmployees()}
                </div>
            </div>
        </body>
    </html>`;

    createHTMLFile(roster);
}


function createHTMLFile(html) {
    fs.writeFile("./dist/index.html", html, function(err) {
        if(err) console.error(err);
    });
}

function getEmployees(){
   
    
    return `<div></div>`;
}
