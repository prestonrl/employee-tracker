const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Bacondinosaur36!",
  database: "tracker",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("  ███████╗███╗   ███╗██████╗ ██╗      ██████╗ ██╗   ██╗███████╗███████╗    ████████╗██████╗  █████╗  ██████╗██╗  ██╗███████╗██████╗ ")
  console.log("  ██╔════╝████╗ ████║██╔══██╗██║     ██╔═══██╗╚██╗ ██╔╝██╔════╝██╔════╝    ╚══██╔══╝██╔══██╗██╔══██╗██╔════╝██║ ██╔╝██╔════╝██╔══██╗")
  console.log("  █████╗  ██╔████╔██║██████╔╝██║     ██║   ██║ ╚████╔╝ █████╗  █████╗         ██║   ██████╔╝███████║██║     █████╔╝ █████╗  ██████╔╝")
  console.log("  ██╔══╝  ██║╚██╔╝██║██╔═══╝ ██║     ██║   ██║  ╚██╔╝  ██╔══╝  ██╔══╝         ██║   ██╔══██╗██╔══██║██║     ██╔═██╗ ██╔══╝  ██╔══██╗")
  console.log("  ███████╗██║ ╚═╝ ██║██║     ███████╗╚██████╔╝   ██║   ███████╗███████╗       ██║   ██║  ██║██║  ██║╚██████╗██║  ██╗███████╗██║  ██║")
  console.log("  ╚══════╝╚═╝     ╚═╝╚═╝     ╚══════╝ ╚═════╝    ╚═╝   ╚══════╝╚══════╝       ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝");
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
  const query = "SELECT id, name AS department FROM department";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    interface();
  });
};

function viewRoles() {
  const query = "SELECT r.id, title AS role, salary, name AS department FROM role r LEFT JOIN department d ON department_id = d.id";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    interface();
  });
};

function viewEmployees() {
  const query = "SELECT employee.id, first_name AS firstname, last_name AS lastname, title AS role, name AS department, salary as salary FROM employee INNER JOIN role ON employee.role_id = role.id INNER JOIN department ON role.department_id = department.id;";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    interface();
  });
};

function addDepartment() {
  inquirer
    .prompt({
      type: "input",
      message: "What is the name of the department you want to add?",
      name: "department",
    })
    .then(function (res) {
      const department = res.department;
      const query = `INSERT INTO department (name) VALUES("${department}")`;
      connection.query(query, function (err, res) {
        if (err) throw err;
        console.log(department + " has beeen added")
        interface();
      });
    });
};

function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the job title you want to add?",
        name: "title",
      },
      {
        type: "input",
        message: "What is the salary for this position?",
        name: "salary",
      },
      {
        type: "input",
        message: "What is the department ID for this position?",
        name: "departmentID",
      },
    ])
    .then(function (res) {
      const title = res.title;
      const salary = res.salary;
      const departmentID = res.departmentID;
      const query = `INSERT INTO role (title, salary, department_id) VALUE("${title}", "${salary}", "${departmentID}")`;
      connection.query(query, function (err, res) {
        if (err) throw err;
        console.log(title + " has been added as a new role");
        interface();
      });
    });
};

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the employee's first name?",
        name: "firstName",
      },
      {
        type: "input",
        message: "What is the employee's last name?",
        name: "lastName",
      },
      {
        type: "input",
        message: "What is the employee's role ID?",
        name: "roleID",
      },
      {
        type: "input",
        message: "What is the employee's manager ID?",
        name: "managerID",
      },
    ])
    .then(function (res) {
      const firstName = res.firstName;
      const lastName = res.lastName;
      const roleID = res.roleID;
      const managerID = res.managerID;
      const query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE("${firstName}", "${lastName}", "${roleID}", "${managerID}")`;
      connection.query(query, function (err, res) {
        if (err) throw err;
        console.log(firstName + " " + lastName + " has been added")
        interface();
      });
    });
};

function updateRole() {
 
};
