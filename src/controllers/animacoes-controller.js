import { animacao } from "../models/animacoes-model.js"
import { animacaoDAO }from '../DAO/animacoes-DAO.js'

export const animacoes = (app, bdd) => {

    const animacoesDAO = new animacaoDAO(bdd);

    //ROTA PARA PUXAR ANIMAÇÕES
    app.get('/animacoes', (req, res) => {
        const data = async () => {
            try{
                const animacao = await animacoesDAO.listarAnimacoes()
                res.status(200).json(animacao)
            }catch(error){
                res.status(404).json(error)
            }
        }

        data();
    })

    //ROTA PARA PUXAR ANIMAÇÕES POR PARAMETRO
    app.get('/animacoes/:id', (req, res) => {
        const data = async () => {
            try{
                const animacao = await animacoesDAO.listarAnimacoesID(req.params.id)
                res.status(200).json(animacao)
            }catch(error){
                res.status(404).json(error)
            }
        }

        data();
    })

    //ROTA DE CADASTRAR
    app.post('/animacoes', (req, res) => {
        body = req.body;
        const novaAnimacao = new animacao(body.titulo, body.descricao, body.genero, body.lancamento, body.duracao);
        console.log(novaAnimacao)
        const data = async () => {
            try{
                const animacao = await animacoesDAO.inserirAnimacoes(novaAnimacao)
                res.status(201).json(animacao)
            }catch(error){
                res.status(404).json(error)
            }
        }

        data();
    })

    //ROTA DE ALTERAR
    app.put('/animacoes/:id', (req, res) => {
        body = req.body;
        id = req.params.id;
                const data = async () => {
                    try{
                        const animacaoAntiga = await animacoesDAO.listarAnimacoesID(id)
                        const animacaoAtual = new Animacao (body.titulo || animacaoAntiga[0].titulo, body.descricao || animacaoAntiga[0].descricao, body.genero || animacaoAntiga[0].genero, body.lancamento || animacaoAntiga[0].lancamento, body.duracao || animacaoAntiga[0].duracao);
                        const parametro = [animacaoAtual.titulo, animacaoAtual.descricao, animacaoAtual.genero, animacaoAtual.lancamento, animacaoAtual.duracao, id]
                        const animacao = await animacoesDAO.alterarAnimacoes(parametro)
                        res.status(200).json(animacao)
                    }catch(error){
                        res.status(404).json(error)
                    }
                }
        
                data();
            })

    //ROTA DE DELETAR
    app.delete('/animacoes/:id', (req, res) => {
        const data = async () => {
            try{
                const animacao = await animacoesDAO.deletarAnimacoes(req.params.id)
                res.status(200).json(animacao)
            }catch(error){
                res.status(404).json(error)
            }
        }

        data();
    })

};