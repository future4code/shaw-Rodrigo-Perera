import express, {Request, Response} from "express";
import cors from "cors";
import { usersArray, User, Transitions  } from "./data";


const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

app.get('/users', (req: Request, res: Response) => {
    try{
        const users = usersArray.map((user) => {
            return user
        })
        res.status(200).send(users)
    }catch(error:any) {
        res.status(401).send({message: error.message})
    }
})

app.post('/users', (req: Request, res: Response) => {
    try{
        const date = new Date()
        date.setFullYear(date.getFullYear() - 18)
        const age = new Date(req.body.birthday)

        const newUser:User = {
            name: req.body.name,
            cpf: req.body.cpf,
            birthday: req.body.birthday,
            transitions: [{
                value: 0,
                descprition: "",
                paymentDate: ""
        }]
        }

        if(date.getTime() > age.getTime()){
            usersArray.push(newUser)
        } else {
            throw new Error('User doesnt match all requisitions')
        }
        res.status(200).send('User createated successfully')
    }catch(error:any){
        res.status(400).send({message: error.message})
    }
})