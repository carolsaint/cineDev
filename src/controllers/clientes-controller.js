import {clientes} from '../models/clientes-models.js';

export const cliente  = (app) =>{
    // ROTA PARA PUXAR CLIENTES
    app.get('/clientes', (req,res)=>{
        res.send("ROTA GET CLIENTES")
    })
    // ROTA PARA PUXAR CLIENTES POR PARAMETRO
    app.get('/clientes/:id', (req, res)=>{
        res.send("ROTA GET CLIENTES POR PARAMETRO")
    })
    // ROTA PARA CADASTRAR CLIENTES
    app.post('/clientes', (req,res)=>{
        res.send("ROTA POST CLIENTES")
    })
    // ROTA PARA ALTERAR CLIENTES
    app.put('/clientes', (req,res)=>{
        res.send("ROTA PUT CLIENTES")
    })
    // ROTA PARA DELETAR CLIENTES
    app.delete('/clientes', (req,res)=>{
        res.send("ROTA DELETE CLIENTES")
    })
}


