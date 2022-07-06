import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export async function getUserProfile(req: Request, res: Response){
    try {
        const token:any = req.headers.authorization

        if(!token){
            res
            .status(422)
            .send('Usuário precisa de uma autorização passado nos headers')
        }

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)

        if(tokenData.role !== 'ADMIN'){
            res
            .status(401)
            .send('Apenas usuários ADMIN podem acessar essa seção')
        }

        const userDatabase = new UserDatabase()
        const users = await userDatabase.getUserProfile()

        res.status(200).send(users)
    } catch (error:any) {
        
    }
}