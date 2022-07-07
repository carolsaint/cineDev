import { animacoes } from "../models/animacoes-model.js"
import { animacaoDAO }from '../DAO/animacoes-DAO'

export const animacoes = (app, bd) => {

    const animacoesDAO = new animacaoDAO(bd);

    //ROTA PARA PUXAR ANIMAÇÕES
    app.get('/animacoes', (req, res) => {
        const data = async () => {
            try{
                const animacoes = await animacoesDAO.listarAnimacoes()
                res.status(200).json(animacoes)
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
                const animacoes = await animacoesDAO.listarAnimacoesID(req.params.id)
                res.status(200).json(animacoes)
            }catch(error){
                res.status(404).json(error)
            }
        }

        data();
    })

    //ROTA DE CADASTRAR
    app.post('/animacoes', (req, res) => {
        body = req.body;
        const novaAnimacao = new animacoes(body.titulo, body.descricao, body.genero, body.lancamento, body.duracao);
        console.log(novaAnimacao)
        const data = async () => {
            try{
                const animacoes = await animacoesDAO.inserirAnimacoes(novaAnimacao)
                res.status(201).json(animacoes)
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
                        const animacaoAtual = new Animacoes(body.titulo || animacaoAntiga[0].titulo, body.descricao || animacaoAntiga[0].descricao, body.genero || animacaoAntiga[0].genero, body.lancamento || animacaoAntiga[0].lancamento, body.duracao || animacaoAntiga[0].duracao);
                        const parametro = [animacaoAtual.titulo, animacaoAtual.descricao, animacaoAtual.genero, animacaoAtual.lancamento, animacaoAtual.duracao, id]
                        const animacoes = await animacoesDAO.alterarAnimacoes(parametro)
                        res.status(200).json(animacoes)
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
                const animacoes = await animacoesDAO.deletarAnimacoes(req.params.id)
                res.status(200).json(animacoes)
            }catch(error){
                res.status(404).json(error)
            }
        }

        data();
    })

};


