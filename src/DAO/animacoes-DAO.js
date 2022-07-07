export class animacaoDAO {
    constructor(bdd){
        this.bdd= bdd;
    }
    listarAnimacoes(){
        return new Promise ((resolve, reject) => {
            this.bdd.all(`SELECT * FROM ANIMACOES`, (error, resultado) => {
                    if (error) reject(error)
                    else resolve(resultado)
                })
        })
    }

    listarAnimacoesID(id){
        return new Promise ((resolve, reject) => {
            this.bdd.all(`SELECT * FROM ANIMACOES WHERE id = ${id}`, (error, resultado) => {
                if (error)reject(error)
                else resolve(resultado)
            })
        })
    }


    inserirAnimacoes(animacao){
        return new Promise ((resolve, reject) => {
            this.bdd.run(`INSERT INTO ANIMACOES (titulo, descricao,genero, lancamento, duracao) VALUES (?, ?, ?, ?, ?)`, [animacao.titulo, animacao.descricao, animacao.genero, animacao.lancamento, animacao.duracao],
            (error) => {
                if (error) reject(error)
                else resolve('Animação Inserida')
            })
        })
    }


    alterarAnimacoes(animacaoAtual){
        return new Promise ((resolve, reject) => {
            this.bdd.run(`UPDATE ANIMACOES SET titulo = ?, descricao = ?, genero = ?, lancamento = ?, duracao = ? WHERE id = ?)`, animacaoAtual,
            (error) => {
                if (error) reject(error)
                else resolve('Animação Alterada')
            })
        })
    }


    deletarAnimacoes(id){
        return new Promise ((resolve, reject) => {
            this.bdd.run(`DELETE FROM ANIMACOES WHERE id = ${id}`, (error) => {
                if (error) reject(error)
                else resolve('Animação Deletada')
            })
        })
    }
}