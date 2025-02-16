const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root', // Sesuaikan dengan user MySQL-mu
    password: 'Raffi194', // Sesuaikan dengan password MySQL-mu
    database: 'dashboard_db'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
