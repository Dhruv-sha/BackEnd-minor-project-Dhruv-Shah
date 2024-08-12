const express = require('express');
const routes = require('./routes/items.js')


const app = express();
const PORT = 5000;




app.use("/items",routes)




app.listen(PORT , ()=> console.log("Server is running at port " + PORT));