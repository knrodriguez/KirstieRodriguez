const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', require('./api'))

app.get('*', (req,res,next) => {
    try {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    } catch (error) {
        next(error);
    }
})

app.use((err,req,res,next) => {
    res.status(err.status || 500).send(err.message || 'Internal Server Error');
})

app.listen(PORT, () => {
    console.log(`Connected on port ${PORT} at \n
        http://localhost:${PORT}`);
})