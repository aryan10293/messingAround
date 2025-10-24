import express, { Router } from "express";
import http from "http";
import mongoose from "mongoose";
import passport from "passport";
import session from "express-session";
import connectMongo from "connect-mongo";
import flash from "express-flash";
import logger from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import * as bodyParser from 'body-parser';
import WebSocket, { WebSocketServer } from 'ws';
const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });
const MongoStore = connectMongo(session);

let router: Router = express.Router();
router.use(bodyParser.text());

// import connectDB from "./config/database";
import mainRoutes from "./routes/main";

dotenv.config({ path: "./config/.env" });

// connectDB();

app.use("/", mainRoutes);

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
//Body Parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json({limit: '50mb'}));


app.use(logger("dev"));

const store = new MongoStore({ mongooseConnection: mongoose.connection, collection: 'sessions' });
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store,
  })
);
app.use(cookieParser("keyboard cat"));

app.use(passport.initialize());
app.use(passport.session());


app.use(flash());

//app.use("/", mainRoutes);



server.listen(process.env.PORT || 2040, () => {
  console.log(`Server is running, you better catch it! on ${process.env.PORT || 2040}`);
});