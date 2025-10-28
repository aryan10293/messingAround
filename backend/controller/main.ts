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
    signup: async (req:Request, res:Response) => {
        const { firstName, lastName, email, password, confirmPassword } = req.body;
        console.log(req.body)
    }
    
}
export default search