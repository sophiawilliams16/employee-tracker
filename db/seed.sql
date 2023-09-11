INSERT INTO department (id, department_name)
VALUES (1, "Management"), (2, "Engineering"), (3, "Product");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "CEO", 100000, 1), (2, "CFO", 100000, 1), (3, "CTO", 100000, 2), (4, "Software Engineer", 100000, 2), (5, "Product Manager", 100000, 3), (6, "Product Design", 100000, 3);


INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Sophia", "Williams", 1, 1), 
        (2, "Elon", "Musk", 2, 1), 
        (3, "Sam", "Altman", 3, 1), 
        (4, "Bill", "Gates", 4, 4),
        (5, "Mark", "Zuckerberg", 5, 1), 
        (6, "Steve", "Jobs", 6, 5);



