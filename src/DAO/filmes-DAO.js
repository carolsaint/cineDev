export class FilmeDAO {
  constructor(filmesBD) {
    this.bd = bd;
  }
  listarFilme() {
    return new Promise((resolve, reject) => {
      this.bd.all(`SELECT * FROM FILMES`, (error, resultado) => {
        if (error) {
          reject("Erro ao selecionar o banco")
        } else {
          resolve({ "TABLE SELECIONADA": resultado });
        }
      })
    })
  }
  listarFilmesID(id) {
    return new Promise((resolve, reject) => {
      this.bd.all('SELECT * FROM FILMES  WHERE id = ?', [id], (error, rows) => {
        if (error) {
          reject({ "ERRO": error.message })
        } else {
          resolve({ "filmes": rows })
        }
      })
    })
  }

  insereFilme(novoFilme) {
    return new Promise((resolve, reject) => {
      this.bd.run(`INSERT INTO FILMES ( TITULO, DESCRICAO, GENERO, RATING, DURACAO) VALUES (?,?,?)`,
        [novoFilme.titulo, novoFilme.descricao, novoFilme.genero, novoFilme.rating, novoFilme.duaracao],
        (error) => {
          if (error) {
            console.log('reject');
            reject('Filme não pôde ser inserido')
          } else {
            console.log('resolve');
            resolve('Filme inserido com sucesso')
          }
        })
    })
  }
  alterarFilme(FilmeAtualizado) {
    return new Promise((resolve, reject) => {
      this.bd.run('UPDATE FILME SET TITULO = ?, DESCRICAO = ?, GENERO = ?, RATING = ?, DURACAO = ? WHERE id = ?', FilmeAtualizado, (erro) => {
        if (erro) reject('Não foi possível atualizar o Filme');
        else resolve('Filme atualizado');
      });
    })
  }
  deletarFilme(id) {
    return new Promise((resolve, reject) => {
      this.bd.run(`DELETE FROM FILMES WHERE ID=${id}`,
        (err) => {
          if (err) {
            reject(err)
          } else {
            resolve('Filme deletado com sucesso')
          }
        })
    })
  }

}
