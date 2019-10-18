const express       = require('express');
const app           = express();
const cors          = require('cors');
const bodyParser    = require('body-parser');
const path          = require('path');


//Init Middleware
app.use(express.json({ extended: false }));
app.use(express.static('client/build'));


const PORT = process.env.PORT || 5000;


//Define routes
// app.use('/', require('./routes/api/'))


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})



app.listen(PORT, ()=>  console.log(`Server started on ${PORT}`))