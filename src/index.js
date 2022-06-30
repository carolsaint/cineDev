// importação do express e do .env
import "dotenv/config"
import  Express  from "express"
const port = process.env.PORTA

const app = Express();
app.use(Express.json());
//middleware
app.use((req,res,next)=>{
    next();
});

import {filmesDB} from './src/infra/filmes-bd.js'
import {filmes} from './src/controllers/filmes-controller.js'
filmes(app, filmesDB)

app.listen(port,(port)=>{
  console.log("Porta funcionando")
})


export default app