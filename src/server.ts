import express, { response } from "express";

const app = express();

/* 
GET = BUSCAR
POST = CRIACAO
PUT = ALTERACAO 
DELETE = DELETAR
PATCH = ALTERAR UMA INFORMAÇÃO ESPECCIFICA
*/

app.get("/", (req,res) => {
    return res.json({
        message: "Olá NLW-05"
    })
});

app.post("/", (req,res) => {
    return res.json({
        message: "usuário salvo com successo!"
    })
})

app.listen(3002, () => {
    console.log("servidor rodando na porta 3002")
}); 
