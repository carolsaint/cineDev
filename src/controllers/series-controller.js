import { bdS} from "../infra/bdSQLite-series.js";
// import { seriesDAO }from '../DAO/series-DAO.js';
import {Serie } from '../models/series-model.js';

export const series = (app)=>{
    //rota para puxar series
    app.get ('/series', (req,res)=>{
        bdS.all('SELECT * FROM SERIES', (error, result)=>{
            if(error) res.status(404).json(error)
            else res.status(200).json(result)
        })
    })
    //rota para puxar series por parametro
    app.get ('/series/:id', (req,res)=>{
        bdS.all(`SELECT * FROM SERIES WHERE id = ${req.params.id} `, (error, result)=>{
            if(error) res.status(404).json(error)
            else res.status(200).json(result)
        })
    })

    //rota para cadastrar series
    app.post ('/series', (req,res)=>{
        body = req.body;
        const novaSerie = new Serie(body.title, body.description, body.genre, body.seasons)
        console.log(novaSerie);
        bdS.run(`INSERT INTO SERIES (title,description, genre, seasons)
        VALUES (?, ?, ?, ?)`, [novaSerie.title, novaSerie.description, novaSerie.genre, novaSerie.seasons],(error)=>{
            if(error) res.status(404).json(error)
            else res.status(200).json('Inserido')
        })
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

