const express = require('express');
const dotenv = require('dotenv')
const connectDB = require('./config/db');
const colors = require("colors");
const userRoutes = require("./routes/userRoutes"); 
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require('./routes/messageRoutes');
const {notFound, errorHandler} = require("./middleware/errorMiddleware")

dotenv.config();
connectDB();

const app = express();

app.use(express.json()); // To accept json data from frontend
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

// app.get('/', (req, res)=>{
//     res.send("Api is running");
// });

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 4000
app.listen(PORT,console.log(`Server started on PORT ${PORT}`.yellow.bold));