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
filmes(app, bd);


import {cliente} from './controllers/clientes-controller.js'
cliente(app);


// app.listen(port,(port)=>{
//   console.log("Porta funcionando")
// })

app.get('/', (req, res) => {
  res.send("rota principal")
})

app.listen(3333, ()=> {
  console.log('rodando')
})


export default app