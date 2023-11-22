const express = require('express');
const dotenv = require('dotenv')
const connectDB = require('./config/db');
const colors = require("colors");
const userRoutes = require("./routes/userRoutes"); 

dotenv.config();
connectDB();

const app = express();

app.use(express.json()); // To accept json data from frontend
app.use("/api/user", userRoutes);

app.get('/', (req, res)=>{
    res.send("Api is running");
});

// app.get('/api/chat', (req, res)=>{
//     res.send(chats);
// });

// app.get('/api/chat/:id', (req, res)=>{
//     const singleChat = chats.find((c)=>c._id === req.params.id);
//     res.send(singleChat);
// });

const PORT = process.env.PORT || 4000
app.listen(PORT,console.log(`Server started on PORT ${PORT}`.yellow.bold));