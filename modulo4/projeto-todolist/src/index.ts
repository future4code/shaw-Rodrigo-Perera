import express, { Express, request, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

const app: Express = express();
app.use(express.json());
app.use(cors());

app.post("/user", async (req: Request, res: Response) => {
    try {
        const newUser = {
           name: req.body.name,
           nickname: req.body.nickname,
           email: req.body.email
        }
        await connection
        .insert(newUser)
        .into("TodoListUser")

        res.status(200).send("Usuario criado com sucesso")
    } catch (error:any) {
      res.status(400).send({message: error.message})
    }
})

app.get("/user/:id", async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id
        const result = await connection
        .select('id', 'nickname')
        .where({id})
        .into('TodoListUser')
        if(result.length === 0){
            errorCode = 418
            throw new Error('Usuário não encontrado')
        }
        res.status(200).send(result)
    } catch (error:any) {
        res.status(400).send({message: error.message})
    }
})

app.put("/user/edit/:id", async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id
        const updateUser = {
            name: req.body.name,
            nickname: req.body.nickname
        }
        if(updateUser.name === null || updateUser.nickname === null || updateUser.name === undefined || updateUser.nickname === undefined){
            errorCode = 451
            throw new Error('Usuário não encontrado')
        }
        await connection
        .update(updateUser)
        .where({id})
        .into('TodoListUser')
        res.status(200).send("Usuário atualizado")
    } catch (error:any) {
        res.status(400).send({message: error.message})
    }
})

app.post("/task", async (req: Request, res: Response) => {
    let errorCode= 400
    try {
        const newTask = {
            title: req.body.title,
            description: req.body.description,
            limit_date: req.body.limitDate.split('/').reverse().join('/'),
            creator_user_id: req.body.creatorUserId
         }
         await connection 
         .insert(newTask)
         .into("TodoListTask")
         if (newTask.title === null || newTask.description === null || newTask.limit_date === null || newTask.creator_user_id === null || newTask.title === undefined || newTask.description === undefined || newTask.limit_date === undefined || newTask.creator_user_id === undefined) {
            errorCode = 422
            throw new Error('Alguma propriedade não foi passada no body')
         }
         res.status(200).send("Tarefa criada com sucesso")
    } catch (error:any) {
        res.status(400).send({message: error.message})
    }
})

app.get("/task/:id", async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.params.id
        const result = await connection
        .select('id', 'title', 'description', 'status', 'limit_date', 'creator_user_id')
        .where({id})
        .into('TodoListTask')
        if(result.length === 0){
            errorCode = 418
            throw new Error('Usuário não encontrado')
        }
        res.status(200).send(result)
    } catch (error:any) {
        res.status(400).send({message: error.message})
    }
})



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});