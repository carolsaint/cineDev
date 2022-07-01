import app from "../app.js";
import { filmesBD } from "./src/infra/filmes-bd.js";
import { filmes } from "../models/filmes-model.js";

export const filmes = (app) => {
  app.get("/filmes", (req, res) => {
    res.json({ "Esses são todos os filmes catalogados": filmesBD });
  });

  app.post("/filmes/novoFilme", (req, res) => {
    try {
      const body = req.body;
      const novoFilme = new Filme(body.titulo, body.descricao, body.genero, body.rating, body.duracao);
      filmesBD.filmes.push(novoFilme);
      res.json({ "Filme Adicionado ao Catálogo:": novoFilme });
    } catch (error) {
      res.json({ Error: error.message });
    }
  });
  app.put("/filmes/:id", (req, res) => {
    const body = req.body;
    const id = req.params.id;

    const filmes = FilmeDAO.listarFilmesID(id);
    const dadosFilmeNovo = new Filme(
      body.titulo || filmes.titulo,
      body.descricao || filmes.descricao,
      body.genero || filmes.genero,
      body.rating || filmes.rating,
      body.duracao || filmes.duracao,
    );
    const parametro = [
      dadosFilmeNovo.titulo,
      dadosFilmeNovo.descricao,
      dadosFilmeNovo.genero,
      dadosFilmeNovo.rating,
      dadosFilmeNovo.duracao,
      id,
    ];
    const FilmeAtual = FilmeDAO.alterarFilme(parametro)
      .then((result) => {
        res.send(FilmeAtual);
      })
      .catch((error) => {
        res.send(err);
      });
  });

  app.delete("/filme/:id", (req, res) => {
    FilmeDAO.deletarFilme(req.params.id)
      .then((resultado) => {
        res.send(`Filme deletado com sucesso`);
      })
      .catch((err) => {
        res.send(err);
      });
  });
};
