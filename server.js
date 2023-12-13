
const express = require('express');
const studentRoute = require('./src/student/routes');

const app = express();
const port = 3000; //

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Get request!' });
}); //Testing of port

app.use('/api/students', studentRoute);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
