const express = require('express') // backend connection with database
const mysql = require('mysql') // database
const cors = require('cors') //connecting to our api or a database tends to give out errors and to minimize those errors we make use of cors
//nodemon takes care of automatic updates without needing us to switch off and on the server and also tells us where the errors are also kills the server if the errors are there

// connect to express app
// express app is used to create a local server and we are using the app to listen to the port 3001 to check for any updates and the server is running on port 3001
const app = express();


// connect to mysql 
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'employee_info'
})

app.listen(3001, () =>{ // writing a function
    console.log('Server is running on port 3001')
})

// middleware
app.use(express.json())
app.use(cors())

// routes
// Create // POST REQUEST
app.post('/create', (req, res) =>{ //using express app to post whatever is inside the schema inside the path of /create
    const {name, age, department, designation, salary, address} = req.body
    db.query(
        'INSERT INTO employees (name, age, department, designation, salary, address) VALUES (?, ?, ?, ?, ?, ?)', //ID is going to be automatically added
        [name, age, department, designation, salary, address],
        (err, result) => {
            if(err){
                console.log('Values were successfully inserted')
            }
            else{
                res.send('Values were inserted successfully')
            }
        }
    )
})

// Reading // GET REQUEST
app.get('/employees', (req, res) =>{
    db.query("SELECT * FROM employees", (err, result) => {
        if(err){
            console.log(err)
        }
        else{
            res.json(result)
        }
    })
})

// Updating // PUT/PATCH REQUEST
app.put('/employees/name', (req, res) => {
    const { id, name } = req.body;
    db.query(
        'UPDATE employees SET name = ? WHERE id = ?',
        [name, id],
        (err, result) => handleUpdateResponse(err, result, res)
    );
});

app.put('/employees/age', (req, res) => {
    const { id, age } = req.body;
    db.query(
        'UPDATE employees SET age = ? WHERE id = ?',
        [age, id],
        (err, result) => handleUpdateResponse(err, result, res)
    );
});

app.put('/employees/department', (req, res) => {
    const { id, department } = req.body;
    db.query(
        'UPDATE employees SET department = ? WHERE id = ?',
        [department, id],
        (err, result) => handleUpdateResponse(err, result, res)
    );
});

app.put('/employees/designation', (req, res) => {
    const { id, designation } = req.body;
    db.query(
        'UPDATE employees SET designation = ? WHERE id = ?',
        [designation, id],
        (err, result) => handleUpdateResponse(err, result, res)
    );
});

app.put('/employees/salary', (req, res) => {
    const { id, salary } = req.body;
    db.query(
        'UPDATE employees SET salary = ? WHERE id = ?',
        [salary, id],
        (err, result) => handleUpdateResponse(err, result, res)
    );
});

app.put('/employees/address', (req, res) => {
    const { id, address } = req.body;
    db.query(
        'UPDATE employees SET address = ? WHERE id = ?',
        [address, id],
        (err, result) => handleUpdateResponse(err, result, res)
    );
});

function handleUpdateResponse(err, result, res) {
    if (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    } 
    else {
        res.send(result);
    }
}


// Deleting // DELETE REQUEST
app.delete('/employees/:id', (req, res) => {
    const {id} = req.params
    db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})

// dont need to build a schema page as we are using mysql
