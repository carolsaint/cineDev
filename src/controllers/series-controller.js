import {series} from '../models/series-model';
import {bd} from "../infra/bdSQLite-series.js";
import {seriesDAO }from '../DAO/series-DAO.js'


export const series = (app)=>{
    //rota para puxar series
    app.get ('/series', (req,res)=>{
        res.send('rota get')
    })
    //rota para puxar series por parametro
    app.get ('/series/:id', (req,res)=>{
        res.send('rota get parametro')
    })
    //rota para cadastrar series
    app.post ('/series', (req,res)=>{
        res.send('rota post')
    })
    //rota para alterar serie
    app.put ('/series', (req,res)=>{
        res.send('rota put')
    })
    //rota para deletar series 
    app.delete ('/series', (req,res)=>{
        res.send('rota delete')
    })
}

