import  { Request, Response} from "express";
import findUserEmail from "../config/findUserEmail";
import validator from "validator";
import dotenv from "dotenv";
dotenv.config({ path: "./config/.env" });
import { createUser } from "../models/userModel";
import pool from "../config/neon";
import verifyPassword from "../config/verifyPassword";

let search = {
    search: async (req:Request, res:Response) => {
        let randomNumber: number = Math.random();
        let random: boolean = randomNumber >= 0.5 ? true : false;
        if(random){
            res.status(400).send({status: '400', error:'no search text provided'});
            return;
        } else {
            res.status(200).send({status: '200', message: 'search text provided'});
            return;
        }
    },
    signUp: async (req:Request, res:Response) => {
        try {
            const { email,firstName, password, lastName, age, confirmPassword} = req.body;
            if( !email || !password || !firstName|| !lastName || !age){
                res.status(400).send({status:"400", error:"missing fields in form"})
            } else if (password !== confirmPassword) {
                res.status(400).send({status:"400", error:"passwords do not match"})
            } else if(!validator.isEmail(email)){
                res.status(400).send({status:"400", error:"invalid email"})
            } else {
                console.log(req.body)
                const user = await createUser(firstName, lastName, email, password, age);
                console.log(user);
                res.status(200).send({status:"200", message:"user signed up successfully"})
            }
        } catch (error) {
            res.status(500).send({ status: '500', error: 'Internal server error' });
        }
    },
    signIn: async (req:Request, res:Response) => {
        try {
            const { email, password } = req.body;
            if( !email || !password){
                res.status(400).send({status:"400", error:"missing fields in form"})
            } else {
                const user = await findUserEmail(email);
                // Here you would normally check the email and password against the database
                const verified = await verifyPassword(user.password, password );
                console.log( verified, ": this should be true if password matches");
                // For demonstration, we assume the user is found and password matches
                res.status(200).send({status:"200", message:"user signed in successfully"})
            } 
        } catch (error) {
            res.status(500).send({ status: '500', error: 'Internal server error' });
        }
    },
    testing: async (req:Request, res:Response) => {
        try {
            // users equals the name of the table in your database
            const result = await pool.query("SELECT * FROM users");
            res.json(result.rows);
        } catch (err) {
            console.error(err);
            res.status(500).send("Server Error");
        }
    }
    
}
export default search


// if(validator.isStrongPassword(password) === false){
//                 res.status(400).send({status:"400", error:"weak password"})
//             } else