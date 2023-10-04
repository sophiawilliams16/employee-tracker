DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  department_name VARCHAR(30)
);

CREATE TABLE role (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL, 
  department_id INT,
  FOREIGN KEY (department_id) 
  REFERENCES department(id)
  ON DELETE SET NULL
);

CREATE TABLE employees (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL, 
  role_id INT,
  FOREIGN KEY (role_id) 
  REFERENCES role(id)
  ON DELETE SET NULL,
  manager_id INT,
  FOREIGN KEY (manager_id) 
  REFERENCES employees(id)
  ON DELETE SET NULL
);
