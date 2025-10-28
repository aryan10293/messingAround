import  { Request, Response} from "express";
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
            console.log( !email, !password,  !firstName, !lastName, !age);
            if( !email || !password || !firstName|| !lastName || !age){
                console.log("what the fuck is this ");
                res.status(400).send({status:"400", error:"missing fields in form"})
            } else if (password !== confirmPassword) {
                res.status(400).send({status:"400", error:"passwords do not match"})
            } else {
                res.status(200).send({status:"200", message:"user signed up successfully"})
            }
        } catch (error) {
            res.status(500).send({ status: '500', error: 'Internal server error' });
        }
    }
    
}
export default search