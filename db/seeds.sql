INSERT INTO department (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal'),
    ('Human Resources'),
    ('Customer Service');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Software Engineer', 120000, 2),
    ('Lawyer', 190000, 4),
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 150000, 2),
    ('Accountant', 125000, 3),
    ('Customer Service Team Lead', 80000, 6),
    ('HR Team Lead', 140000, 15),
    ('Quality Assurance', 110000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Wilkie', 'Collins', 1, 1),
    ('Elizabeth', 'Gaskell', 2, NULL),
    ('George', 'Sand', 3, 6),
    ('Vernon', 'Lee', 4, NULL),
    ('Arthur', 'Machen', 5, 2),
    ('Frederick', 'Marryat', 6, 5),
    ('Harriet', 'Martineau', 7, 4),
    ('George', 'Meredith', 8, 3),
    ('Margaret', 'Oliphant', 9, 6),
    ('Anthony', 'Trollope', 1 , 5),
    ('Charlotte', 'Yonge', 2, 4),
    ('Horace', 'Walpole', 3, 3),
    ('Matthew', 'Lewis', 4, 2),
    ('William', 'Bedford', 5, NULL),
    ('Anne', 'Radcliffe', 6, 1),
    ('Charles', 'Brown', 7, 6),
    ('Eliza', 'Parsons',8, 4),
    ('Susan', 'Hill', 9, 1);
