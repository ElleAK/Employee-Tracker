const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

// Get the total votes for all the candidates
router.get('/roles', (req, res) => {
    const sql = `SELECT employees.*, departments.name AS department_name, 
                  COUNT(department_id) 
                  AS count FROM roles 
                  LEFT JOIN candidates ON roles.department_id = employees.id 
                  LEFT JOIN parties ON employees.department_id = departments.id 
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

  module.exports = router;