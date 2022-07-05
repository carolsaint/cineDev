import { bd } from "../infra/bdSQLite-filmes.js";
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
        const body = req.body;
        const novaSerie = new Serie(body.title, body.description, body.genre, body.seasons)
        console.log(novaSerie);
        bdS.run(`INSERT INTO SERIES (title,description, genre, seasons)
        VALUES (?, ?, ?, ?)`, [novaSerie.title, novaSerie.description, novaSerie.genre, novaSerie.seasons],(error)=>{
            if(error) res.status(404).json(error)
            else res.status(200).json('Inserido')
        })
    })

    //rota para alterar serie
    app.put ('/series/:id', (req,res)=>{
        const body = req.body;
        const id = req.params.id;
        bdS.all(`SELECT * FROM SERIES WHERE id = ${id}`, (error, result)=>{
            if(error) res.status(404).json(error)
            else {
                const serieAntiga = result;
                const serieUpdate = new Serie(
                    body.title || serieAntiga[0].title, 
                    body.description || serieAntiga[0].description, 
                    body.genre || serieAntiga[0].genre, 
                    body.seasons || serieAntiga[0].seasons)
                bdS.run(`UPDATE SERIES SET title = ?, description = ?, genre = ?, seasons = ? WHERE id = ${id}` , 
                [serieUpdate.title, serieUpdate.description, serieUpdate.genre, serieUpdate.seasons],(error)=>{
                    if(error) res.status(404).json(error)
                    else res.status(200).json("UPDATED")
                })
            }
        })
    })

    //rota para deletar series 
    app.delete ('/series/:id', (req,res)=>{
        bdS.run(`DELETE FROM SERIES WHERE id = ${req.params.id} `, (error)=>{
            if(error) res.status(404).json(error)
            else res.status(200).json("DELETED")
        })
    })
}