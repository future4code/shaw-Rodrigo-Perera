import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

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

app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const actor = await getActorById(id);
  
      res.status(200).send(actor)
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  app.get("/actor", async (req: Request, res: Response) => {
      try {
          const gender = req.query.gender as string
          const quantity = await getActorQuantityByGender(gender)

          res.status(200).send(quantity)
      } catch (error:any) {
        res.status(400).send({message: error.message})
      }
  })

  app.put("/actor", async (req: Request, res: Response) => {
    try {
      await updateActorSalary(
        req.body.id,
        req.body.salary,
      );
  
      res.status(200).send();
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      await deleteActor(id)
  
      res.status(200).send("show actor has been deleted")
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    //    getActorByName("Tony Ramos").then(response => {console.log(response)})
    //    getActorQuantityByGender("female").then(response => {console.log(response)})
    //    updateActorSalary("001", 10).then(response => {console.log(response)})
    //    deleteActor("001")
    //    averageActorSalaryByGender("female").then(response => {console.log(response)})
    } else {
       console.error(`Failure upon starting server.`);
    }
});


const getActorByName = async(name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = "${name}"
    `)

    return result[0][0]
}

const getActorQuantityByGender = async(gender: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"
    `)

    return result[0][0]
}

const updateActorSalary = async (
    id: string,
    salary: number,
  ): Promise<void> => {
    await connection
      .update({
        salary: salary,
      })
      .where({ id: id})
      .into("Actor");
  };

const deleteActor = async (
    id: string,
  ): Promise<void> => {
    await connection
      .delete()
      .where({ id: id})
      .into("Actor");
  };

const averageActorSalaryByGender = async (gender: string):Promise<any> => {
    const result = await connection 
    .avg("salary as average")
    .where({gender: gender})
    .into("Actor")

    return result
}

const getActorById = async (id: string): Promise<any> => {
    const result = await connection
    .where({id})
    .into("Actor")

    return result
}