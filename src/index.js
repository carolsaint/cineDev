// importação do express e do .env
import "dotenv/config"
import  Express  from "express"
import cors from'cors'
const port = process.env.PORTA

const app = Express();
//middleware
app.use(cors())
app.use(Express.json());
app.use((req,res,next)=>{
    next();
});

import {bd} from './infra/bdSQLite-filmes.js'
import {filmes} from './controllers/filmes-controller.js'
filmes(app, bd)

import {bdd} from './infra/bdSQLite-animacoes.js'
import {animacoes} from './controllers/animacoes-controller.js'
animacoes(app, bdd)

app.listen(3000,(port)=>{
  console.log("Porta funcionando")
})


export default app