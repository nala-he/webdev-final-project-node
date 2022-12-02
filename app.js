import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import mongoose from "mongoose";
import UsersController from "./controllers/users/users-controller.js";

import AuthenticationController from "./controllers/auth/auth-controller.js";
import session from "express-session";
import MongoStore from "connect-mongo";

import RecipesController from "./controllers/recipes/recipes-controller.js";
import RecipeDirectionsController from "./controllers/recipe-directions/recipe-directions-controller.js";
import RecipeIngredientsController from "./controllers/recipe-ingredients/recipe-ingredients-controller.js";
import FridgeIngredientsController
    from "./controllers/fridge-ingredients/fridge-ingredients-controller.js";


const app = express();
const corsConfig = {
    origin: ['http://localhost:3000'],
    methods: ['GET','HEAD','PUT','PATCH','POST','DELETE'],
    credentials: true,
    optionSuccessStatus: 200,
};

app.use(cors(corsConfig));
app.use(express.json());
dotenv.config();

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


let sess = {
    // secret: process.env.REACT_APP_API_BASE,
    secret: "http://localhost:3000",
    cookie: {
        secure: false
    },
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
                                 mongoUrl: connectionString
                             })
}

if (process.env.ENV === 'PRODUCTION') {
    app.set('trust proxy', 1)
    sess.cookie.secure = true
}

app.use(session(sess));

// test if the server is running
app.get('/', (req, res) =>
    res.send('Welcome to RecipeFridge!'));

app.get('/hello', (req, res) =>
    res.send('Hello World!'));

UsersController(app);

AuthenticationController(app);

RecipesController(app);
RecipeDirectionsController(app);
RecipeIngredientsController(app);
FridgeIngredientsController(app);


app.listen(process.env.PORT || 4000);