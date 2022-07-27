const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

// Get the total roles for all the employees
router.get('/roles', (req, res) => {
    const sql = `SELECT employees.*, departments.name AS department_name, 
                  COUNT(department_id) 
                  AS count FROM roles 
                  LEFT JOIN employees ON roles.department_id = employees.id 
                  LEFT JOIN departments ON employees.department_id = departments.id 
                  GROUP BY employee_id 
                  ORDER BY count DESC`;
  
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  });

  // Create a role record
router.post('/role', ({ body }, res) => {
    // Data validation
    const errors = inputCheck(body, 'role_id', 'title', 'salary', 'department_id');
    if (errors) {
      res.status(400).json({ error: errors });
      return;
    }
  
    const sql = `INSERT INTO roles (role_id, title, salary, department_id) VALUES (?,?,?,?)`;
    const params = [body.role_id, body.title, body.salary, body.department_id];
  
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: body,
        changes: result.affectedRows
      });
    });
  });

  module.exports = router;