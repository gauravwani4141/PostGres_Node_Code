

const { Pool } = require("pg");
const queries = require("./queries");
const { error } = require("console");
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'students',
    password: 'Password1#',
    port: 5432,
});

//Databse --postgres-->


const addStudent = (req, res) => {
    const { name, age } = req.body; // Assuming your request body contains these properties

    // Validate the request body, you can add more validations as needed
    if (!name || !age ) {
        return res.status(400).json({ error: "Name, age are required fields." });
    }

    // Assuming 'students' is the name of your table and you have a corresponding SQL query to insert a new student

    // pool.query("query", [values], (error), result)

  

    //Query 

    //values

    //promise
    pool.query(queries.addStudent, [name, age], (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        res.status(200).json({ message: "Student added successfully" });
    });
};

// var pool=require('./db');

const getStudents = (req, res) => {
    pool.query(queries.getAllStudents, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const getStudentsByID = (req, res) => {
    const id = parseInt(req.params.id);
    
    pool.query(queries.getStudentById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};


module.exports = {
    getStudents,
    getStudentsByID,
    addStudent,
}

//Older controller flow was like importing from db.js file


//Azure

//Functions run on frequency

//9:OO clock time triggered azure function---> (* * * * *)

//Vast Code that is imp logic // Queue triggerd azure function  //Queue -- stacked calls // imp // vast code // server crash // not so immediate // 
