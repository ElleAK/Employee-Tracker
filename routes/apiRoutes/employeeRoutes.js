const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck')

router.get('/employees', (req, res) => {
    const sql = `SELECT employees.*, departments.name 
                  AS department_name 
                  FROM employees 
                  LEFT JOIN departments 
                  ON employees.departments_id = departments.id`;
  
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

  module.exports = router;