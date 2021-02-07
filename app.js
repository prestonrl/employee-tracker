const inquirer = require("inquirer");


const interface = () => {
    inquirer.prompt({
        name: 'options',
        type: 'list',
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Quit'],
    }).then((answer) => {
        if (answer.options === "Quit") {
          return process.exit(22);
        } else if (answer.options === "View all departments") {
        } else if (answer.options === "View all roles") {
        } else if (answer.options === "View all employees") {
        } else if (answer.options === "Add a department") {
        } else if (answer.options === "Add a role") {
        } else if (answer.options === "Add an employee") {
        } else if (answer.options === "Update an employee role") {
        }
    })
};

interface();