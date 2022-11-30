import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import UsersController from "./controllers/users/users-controller.js";

const app = express();
app.use(cors());
app.use(express.json());

// build the connection string
const PROTOCOL = "mongodb+srv";

// for remote server (not set up yet)
// const DB_USERNAME = process.env.DB_USERNAME;
// const DB_PASSWORD = process.env.DB_PASSWORD;

// for RecipeFridge app local test
const DB_USERNAME = "webdevGroup";
const DB_PASSWORD = "BiqdhpPVIwqm9KLG";

const HOST = "cluster0.qc7gf85.mongodb.net";
const DB_NAME = "RecipeFridge";
const DB_QUERY = "retryWrites=true&w=majority";

const connectionString = `${PROTOCOL}://${DB_USERNAME}:${DB_PASSWORD}@${HOST}/${DB_NAME}?${DB_QUERY}`;
// connect to the database
mongoose.connect(connectionString)

// test if the server is running
app.get('/', (req, res) =>
    res.send('Welcome to RecipeFridge!'));

app.get('/hello', (req, res) =>
    res.send('Hello World!'));

UsersController(app);

app.listen(process.env.PORT || 4000);