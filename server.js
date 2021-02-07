const inquirer = require("inquirer");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Bacondinosaur36!",
  database: "tracker",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Welcome to Employee Tracker");
  interface();
});

const interface = () => {
  inquirer
    .prompt({
      name: "options",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
        "Quit",
      ],
    })
    .then((answer) => {
      if (answer.options === "Quit") {
        connection.end();
      } else if (answer.options === "View all departments") {
        viewDepartments();
      } else if (answer.options === "View all roles") {
        viewRoles();
      } else if (answer.options === "View all employees") {
        viewEmployees();
      } else if (answer.options === "Add a department") {
        addDepartment();
      } else if (answer.options === "Add a role") {
        addRole();
      } else if (answer.options === "Add an employee") {
        addEmployee();
      } else if (answer.options === "Update an employee role") {
        updateRole();
      }
    });
};

function viewDepartments() {
  const query = "SELECT * FROM department";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    interface();
  });
}
function viewRoles() {
  const query = "SELECT * FROM role";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    interface();
  });
}
function viewEmployees() {
  const query = "SELECT * FROM employee";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    interface();
  });
}
function addDepartment() {}
function addRole() {}
function addEmployee() {}
function updateRole() {}

