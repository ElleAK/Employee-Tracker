INSERT INTO employees
(id, first_name, last_name, manager_id, role_id)
VALUES
(1, 'Elvis', 'Lee', 22, 100),
(2, 'Joanna', 'Smith', 25, 101),
(3, 'Samuel', 'Johnson', 25, 103),
(4, 'Karen', 'Fletcher', 22, 200)

INSERT INTO departments
  (department_id, department_name)
VALUES
(1001, 'Electronics'),
(2002, 'Watches'),
(3003, 'Televisions'),
(4004, 'Cameras'),
(5005, 'Appliances')

INSERT INTO roles
(role_id, title, salary, department_id)
VALUES
(100, 'Engineer', 95000, 1001)
(101, 'Mechanic', 65000, 1001)
(103, 'Sales', 80000, 2002)
(200, 'Support', 52000, 5005)