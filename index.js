const express = require("express");
// Import and require mysql2
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "rootroot",
        database: "employees_db",
    },
    console.log(`Connected to the employees_db database.`)
);

function removeRole() {
    db.findAllRoles()
        .then(([rows]) => {
            let employees = roles;
            console.table(employees);
        })
        .then(() => loadMainPrompts());
}

// get all departments
function getAllDepartments() {
    let query = `SELECT id, department_name FROM department`;
    db.query(query, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: "success",
            data: rows,
        });
    });
}

// add a new department
function addNewDepartment() {
    const sql = `INSERT INTO employees (department) VALUES (?)`;
    const params = [body.department];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: "success",
            data: body,
        });
    });
}

// get all roles
function getAllRoles() {
    const sql = `SELECT id, title FROM role`;

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: "success",
            data: rows,
        });
    });
}

// add a new role
function addNewRole() {
    const sql = `INSERT INTO employees (employee_role) VALUES (?)`;
    const params = [body.employee_role];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: "success",
            data: body,
        });
    });
}

// get all employees
function getAllEmployees() {
    const sql = `SELECT id, first_name, last_name FROM employees`;

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: "success",
            data: rows,
        });
    });
}

// add an employee

function addNewEmployee() {
    const sql = `INSERT INTO employees (employee) VALUES (?)`;
    const params = [body.employee];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: "success",
            data: body,
        });
    });
}

// update an employee role
function updateEmployee() {
    const sql = `UPDATE employees SET employee_role = ? WHERE id = ?`;
    const params = [req.body.employee_role, req.params.id];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
        } else if (!result.affectedRows) {
            res.json({
                message: "Employee not found",
            });
        } else {
            res.json({
                message: "success",
                data: req.body,
                changes: result.affectedRows,
            });
        }
    });
}

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Run CLI prompts using imports from lib
const CLI = require("./lib/cli.js");
const cli = new CLI();
cli.run();

module.exports = {
    getAllDepartments,
    addNewDepartment,
    getAllRoles,
    addNewRole,
    getAllEmployees,
    addNewEmployee,
    updateEmployee,
};
