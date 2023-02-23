const express = require('express');
const cors = require('cors');
const Pool = require('pg').Pool;
const dotenv = require('dotenv');
dotenv.config();

// Create an instance of the database client
const pool = new Pool({
    host: process.env.HOST,
    user: process.env.USER,
    port: process.env.DBPORT,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

// Listen on express server after successful database connection
pool.connect((err) => {
    if (err) {
        console.log(err)
    }
    else {
        app.listen(process.env.PORT, () => {
            console.log(`Connected to database and listening on port ${process.env.PORT}`)
        })
    }
});


// Initialize express server
const app = express();
app.use(express.json());
app.use(cors());


// List all incidents endpoint
app.get('/api/incidents', async(req, res) => {
    try {
        const reports = await pool.query("SELECT * from incidents ORDER BY date DESC");
        res.json(reports.rows)
    } catch (error) {
        console.log(error)
    }
   
})


// Create an incident report endpoint
app.post('/api/add', async(req, res) => {
    const {desc, city, country, weatherData} = req.body;

    try {
        await pool.query(`INSERT INTO incidents(incident_desc, city, country, weather_report)VALUES($1, $2, $3, $4)`,
        [desc, city, country, weatherData]);
        res.send("Report Submitted")
    } catch (error) {
        console.log(error)
    }
    
}) 



