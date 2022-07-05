import sqlite3 from "sqlite3";
const bd = new sqlite3.Database("./series.db");

const SERIES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "SERIES" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "title" VARCHAR(200),
    "description" varchar (500),
    "genre" varchar(64),
    "seasons" DECIMAL(100)
);`;
    
const ADD_SERIES_DATA = `INSERT INTO SERIES (id, title, description, genre, seasons) VALUES (1, 'Doctor Who', 'time travelling blue box', 'sci fi', '39')`;


function criaTabelaSeries() {
    bd.run(SERIES_SCHEMA, (error) => {
      if (error) console.log('Erro ao criar tabela', error);
    });
  }
  
  
  function populaTabelaSeries() {
    bd.run(ADD_SERIES_DATA, (error) => {
      if (error) console.log("Erro ao popular tabela de Series");
    });
  }
  

  bd.serialize(() => {
    criaTabelaSeries();
    populaTabelaSeries();
  });