require("dotenv").config() 
const request = require('supertest')
const port = process.env.PORTA
const UrlAPI = `http://localhost:${port}`

describe('UrlAPI', () => {
    test('TESTAR ROTA FILMES GET', async ()=>{
        const resposta = await request(UrlAPI).get('/filmes')
        expect(resposta.statusCode).toBe(200)
    })
    test('TESTAR ROTA FILMES GET COM ID', async ()=>{
        const resposta = await request(UrlAPI).get('/filmes/:id')
        expect(resposta.statusCode).toBe(200)
    })
    test('TESTAR ROTA FILMES POST', async ()=>{
        const resposta = await request(UrlAPI).post('/filmes/novoFilme')
        expect(resposta.statusCode).toBe(200)
    })
    test('TESTAR ROTA FILMES POST COM ID', async ()=>{
        const resposta = await request(UrlAPI).post('/filmes/novoFilmeID')
        expect(resposta.statusCode).toBe(200)
    })
    test('TESTAR ROTA FILMES PUT COM ID', async ()=>{
        const resposta = await request(UrlAPI).put('/filmes/:id')
        expect(resposta.statusCode).toBe(200)
    })
    test('TESTAR ROTA FILMES DEL COM ID', async ()=>{
        const resposta = await request(UrlAPI).delete('/filmes/:id')
        expect(resposta.statusCode).toBe(200)
    })
})