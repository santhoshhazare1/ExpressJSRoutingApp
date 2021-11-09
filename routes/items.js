
const express = require('express');
const mysql = require('mysql2');

var router= express.Router();
//Configuring express server

router.use(express.json());

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'db_1',
    multipleStatements: true
    });
mysqlConnection.connect((err)=> {
        if(!err)
        console.log('Connection Established Successfully');
        else
        console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
        });

    router.get('/employee' , (req, res) => {
        console.log('employeeee api');
        mysqlConnection.query('select * from employee;', (err, rows, fields) => {
            if (!err)
            res.send(rows);
            //return res.console.log(rows);    
            else
            console.log(err);
            })
            } );
   //Router to GET specific item detail from the MySQL database
router.get('/employee/:id' , (req, res) => {
    mysqlConnection.query('SELECT * from employee WHERE id = ?',[req.params.id], (err, rows, fields) => {
    if (!err)
    res.send(rows);
    else
    console.log(err);
    })
    } );

module.exports=router;
     