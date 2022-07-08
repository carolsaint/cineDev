
# CineDev
![cinedev](https://user-images.githubusercontent.com/88693318/177369047-47604ede-fab9-4637-a815-87eb8ef6d44e.jpg)


CineDev é uma API REST criada com base em plataformas streaming, iguais as interfaces e funcionalidades de sites como Netflix, AmazonPrime, etc. porém, direcionado especificamente para a comunidade dev.

No CineDev procuramos disponibilizar a melhor seleção de filmes e séries com temáticas voltadas para o mundo tech.



***

### Como instalar a API: 💻
1. Clonar repositório 
		https://github.com/carolsaint/cineDev.git
2. Instalar os pacotes necessários utilizando o comando
		npm install
3. Criar e popular o banco de dados usando o comando
		npm run database
4. Iniciar o servidor por meio do comando
		npm start
		
        
 | Método          | Utilidade              | Rota                    
 | ----------------| ------------------     | ------------------ | 
 | **GET**         | Listar todos itens     | htttp://localhost:3000/<**entidade**>
 | **GET**         | Procurar item por ID   | htttp://localhost:3000/<**entidade**>/<**id**>
 | **POST**        | Cadastrar item novo    | htttp://localhost:3000/<**entidade**>/**novaSerie**
 | **PUT**         | Alterar item por ID    | htttp://localhost:3000/<**entidade**>/<**id**>
 | **DELETE**      | Deletar item por ID    | htttp://localhost:3000/<**entidade**>/<**id**>


##Entidades existentes
-Filmes
-Séries
-Animações
-Clientes
-Assinaturas



### Dependências de desenvolvimento: 📋
Dependências necessárias para o ambiente de desenvolvimento

    devDependencies: {
    "cors": "^2.8.5",
    "dotenv": "^16.0.1",
    "express": "^4.18.1",
    "heroku": "^7.60.2",
    "jest": "^28.1.2",
    "nodemon": "^2.0.18",
    "sqlite3": "^5.0.8",
    "supertest": "^6.2.3" 
    }
    
    
 ***

### Tecnologias usadas: 💻
- NodeJs
- Insomnia  
- JavaScript
- SQLite
- Metodologias Ageis
- Arquitetura MVC
- Principios SRP


### Documentação: 📖
- [Arquitetura REST](https://pt.wikipedia.org/wiki/REST)
- [SQLite](https://github.com/TryGhost/node-sqlite3/wiki/API#statement)
- [NPM Docs](https://docs.npmjs.com/)



***
### Time: 🧑‍🤝‍🧑

- ***Calina Fischer*** (Colaboradora)
- ***Carolina Santos Marcello*** (Co-Facilitadora)
- ***Hellen Costa*** (Colaboradora)
- ***Jessica Cintra***(Gestora de Conhecimento)
- ***Nathali Motoka*** (Gestora de Gente)
