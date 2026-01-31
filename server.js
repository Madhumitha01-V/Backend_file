const express = require('express');

const app = express();

app.use(express.json());

const studentRoutes = require('./route/route');
app.use('/student', studentRoutes);
app.use('/auth', require('./route/auth_route'));

app.listen(5000, () => {
    console.log('Server is running on port http://localhost:5000');
});