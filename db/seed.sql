INSERT INTO department (department_name)
VALUES ( "Management"), 
( "Engineering"), 
("Product");

INSERT INTO role (title, salary, department_id)
VALUES ("CEO", 100000, 1), 
( "CFO", 100000, 1), 
("CTO", 100000, 2), 
("Software Engineer", 100000, 2),
("Product Manager", 100000, 3), 
("Product Design", 100000, 3);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ( "Sophia", "Williams", 1,  NULL), 
        ( "Elon", "Musk", 2, 1), 
        ( "Sam", "Altman", 3, 1), 
        ( "Bill", "Gates", 4, 3),
        ( "Mark", "Zuckerberg", 5, 1), 
        ( "Steve", "Jobs", 6, 5);



