import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import userRouter from './routes/users.routes.js';
import authRouter from './routes/auth.routes.js';

const app = express();
dotenv.config();

const connect = () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log('MongoDB connected');
    }).catch(err => {
        throw err;
    })
}

const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use("/api/users", userRouter)
app.use("/api/auth", authRouter)

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";

    return res.status(status).json({
        success: false,
        status,
        message
    })
});

app.get('/', (req, res) => {
    res.send('Server is running!')
});

app.listen(process.env.PORT || 8800, () => {
    connect();
    console.log('Server is running on port 8800');
});