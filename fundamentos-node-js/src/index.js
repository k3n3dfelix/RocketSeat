const express = require('express');

const app = express();
app.use(express.json());
//localhost:3333/?

/* 
    GET - Buscar uma informação dentro do servidor
    POST - Inserir uma informação no servidor
    PUT - Alterar uma informação no servidor
    PATCH - Alterar uma informação especifica
    DELETE - Deletar umainformação no servidor
*/

/*
    Route Params => Identificar um recurso editar/deletar/buscar
    Query Params => Paginação/ Filtro
    Body Params => OS objetos inserção/alteração de recursos (JSON)
*/

app.get("/courses", (request, response) => {
    const query = request.query;
    console.log(query);

    return response.json(["curso 1", "Curso 2", "Curso 3"]);
})

app.post("/courses", (request, response) => {
    const body = request.body;
    console.log(body);
    return response.json(["curso 1", "Curso 2", "Curso 3", "Curso 4"]);
})

app.put("/courses/:id", (request, response) => {
    const params = request.params;
    console.log(params);
    return response.json(["curso 6", "Curso 2", "Curso 3", "Curso 4"]);
})

app.patch("/courses/:id", (request, response) => {
    return response.json(["curso 6", "Curso 7", "Curso 3", "Curso 4"]);
})

app.delete("/courses/:id", (request, response) => {
    return response.json(["curso 6", "Curso 7", "Curso 3"]);
})

app.listen(3333);