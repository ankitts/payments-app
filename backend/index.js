const express = require('express');
const cors = require('cors');
const { User } = require('./db');
const mainRouter = require('./routes/index');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1', mainRouter);


app.get('/', (req, res)=>{
    // const users = User.findAll();
    res.send('home page')
})

app.listen(3000, ()=>{
    console.log("listening at port 3000");
})