const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const Blog = require('./blog.js')

mongoose
.connect('mongodb+srv://ballemup:X2fuGkB59QIjO2jg@cluster0.4j3oy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));


app.get('/home', (req,res) => console.log(res))

app.post('/', (req,res) => {
    console.log(req.body)
    return Blog.create (req.body)
})
app.listen(5000, () => console.log('Listening on Port 5000'))