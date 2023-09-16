// this file prompts the user through the CLI

const inquirer = require("inquirer");
const fs = require("fs");
const { join } = require("path");
const command = require("../index.js");

class CLI {
    run() {
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
            .then( (res) => {
                // switch case
                switch (res.choice) {
                    case "View all departments":
                        command.getAllDepartments();
                        break;
                    case "View all roles":
                        command.getAllRoles();
                        break;
                    case "View all employees":
                        command.getAllEmployees();
                        break;
                    case "Add a department":
                        command.addNewApartment();
                        break;
                    case "Add a role":
                        command.addNewRole();
                        break;
                    case "Add an employee":
                        command.addNewEmployee();
                        break;
                    case "Update employee role":
                        command.updateEmployee();
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
}

module.exports = CLI;
