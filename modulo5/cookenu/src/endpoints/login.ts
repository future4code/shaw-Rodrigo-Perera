import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export async function login(req: Request, res: Response){
    try {
        const {email, password} = req.body;

        if(!email || !password){
            res
            .status(422)
            .send('Alguma das informações foi inserida incorretamente')
        }

        const userDatabase = new UserDatabase()
        const user = await userDatabase.findUserByEmail(email)

        if(!user){
            res.status(409).send('Email não está cadastrado')
        }

        const hashManager = new HashManager()
        const passwordIsCorrect = hashManager.compare(password, user.getPassword())

        if(!passwordIsCorrect){
            res.status(401).send("Email ou senha incorreta")
        }

        const authenticator = new Authenticator()
        const token = authenticator.generate({id: user.getId(), role: user.getRole()})

        res.status(200).send({message: 'Usuário logado com sucesso', token})
    } catch (error:any) {
        res.status(400).send(error.message)
    }
}