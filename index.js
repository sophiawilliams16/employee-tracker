// Import and require mysql2
const mysql = require("mysql2");
const inquirer = require("inquirer");

// Connect to database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "employees_db",
});

run();

function run() {
    return inquirer
        .prompt([
            {
                type: "list",
                name: "choice",
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
            },
        ])
        .then((res) => {
            // switch case
            switch (res.choice) {
                case "View all departments":
                    getAllDepartments();
                    break;
                case "View all roles":
                    getAllRoles();
                    break;
                case "View all employees":
                    getAllEmployees();
                    break;
                case "Add a department":
                    addNewDepartment();
                    break;
                case "Add a role":
                    addNewRole();
                    break;
                case "Add an employee":
                    addNewEmployee();
                    break;
                case "Update an employee role":
                    updateEmployee();
                    break;
                default:
                    console.log("err");
            }
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log(error.message);
            } else {
                console.log("Success!");
            }
        });
}


// get all departments
function getAllDepartments() {
    let query = `SELECT department_name FROM department`;
    db.query(query, (err, rows) => {
        console.table(rows);
        run();
    });
}

// add a new department
function addNewDepartment() {
    inquirer
    .prompt({
        type: "input",
        message: "Please enter the name of the new department:",
        name: "department_name",
    })
    .then((answers) => {
        const sql = `INSERT INTO department (department_name) VALUES (?)`;
        const params = [answers.department_name];

        db.query(sql, params, (err, result) => {
            if (err) throw err;
            console.log("new department added");
            run();
        });
    });
}

// get all roles
function getAllRoles() {
    // id, title, name of department and salary
    const sql = `SELECT role.id, role.title, department.department_name, role.salary FROM role LEFT JOIN department ON role.department_id = department.id;`;
    
    db.query(sql, (err, rows) => {
        console.table(rows);
        run();
    });
}

// add a new role
function addNewRole() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "Please enter the name of the new role:",
            name: "title",
        },
        {
            type: "input",
            message: "Please enter the salary of the new role:",
            name: "salary",
        },
        {
            type: "input",
            message: "Please enter the department id of the new role:",
            name: "department_id",
        },
    ])
    .then((answers) => {
        const sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;
        const params = [
            answers.title,
            answers.salary,
            answers.department_id,
        ];
        
        db.query(sql, params, (err, result) => {
            if (err) throw err;
            console.log("new role added");
            run();
        });
    });
}

// get all employees
function getAllEmployees() {
    let query = `
    SELECT 
    employees.id,
    employees.first_name,
    employees.last_name,
    role.title AS role_title,
    role.salary,
    department.department_name,
    manager.first_name AS manager_first_name,
    manager.last_name AS manager_last_name
    FROM employees
    LEFT JOIN role ON employees.role_id = role.id
    LEFT JOIN department ON role.department_id = department.id
    LEFT JOIN employees AS manager ON employees.manager_id = manager.id`;

    db.query(query, (err, rows) => {
        console.table(rows);
        run();
    });
}

// add a new employee
function addNewEmployee() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "Please enter the first name of the new employee:",
            name: "first_name",
        },
        {
            type: "input",
            message: "Please enter the last name of the new employee:",
            name: "last_name",
        },
        {
            type: "input",
            message: "Please enter the id of their new role:",
            name: "role_id",
        },
        {
            type: "input",
            message: "Please enter the id of their manager:",
            name: "manager_id",
        },
    ])
    .then((answers) => {
        const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
        const params = [
            answers.first_name,
            answers.last_name,
            answers.role_id,
            answers.manager_id,
        ];
        
        db.query(sql, params, (err, result) => {
            if (err) throw err;
            console.log("new employee added");
            run();
        });
    });
}

// update an employee role
function updateEmployee() {
    inquirer
    .prompt([
        {
            type: "input",
            message:
            "Please enter the ID of the employee whose role you want to update:",
            name: "id",
        },
        {
            type: "input",
            message: "Please enter the new role ID for the employee:",
            name: "roleId",
        },
    ])
    .then((answers) => {
        const sql = `
        UPDATE employees
        SET role_id = ?
        WHERE id = ?`;
        const params = [answers.roleId, answers.id];
        console.log(
            "Updating employee role. SQL query:",
            sql,
            "Parameters:",
            params
            );
            
            db.query(sql, params, (err, result) => {
                if (err) {
                    console.error("Error updating employee role:", err.message);
                }
                
                console.log("Employee role updated");
                run();
            });
        });
    }
    
    // // remove Role
    // function removeRole() {
    //     db.findAllRoles()
    //         .then(([rows]) => {
    //             let employees = roles;
    //             console.table(employees);
    //         })
    //         .then(() => run());
    // }