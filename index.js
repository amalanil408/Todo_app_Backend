const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 3000 || process.env.PORT;
const todoRoutes = require('./routes/todo_routes');
const DB = 'mongodb+srv://amalanil8138:amalanil9061@cluster0.hjqmr.mongodb.net/';


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api",todoRoutes);

mongoose.connect(DB,{}).then(() => console.log("MOngo db connectd")).catch((err) => console.log(err));

app.listen(PORT,() => console.log(`server runing in ${PORT}`));
