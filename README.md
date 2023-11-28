# API de Filmes

Esta é uma API para gerenciar informações sobre filmes, permitindo operações CRUD (Create, Read, Update, Delete). A API foi construída usando Express.js, Knex.js e utiliza um banco de dados SQLite. Ela segue as boas práticas de uma arquitetura REST e utiliza os métodos padrão do protocolo HTTP para interações.

## Endpoints

| Método | Endpoint      | Descrição                                                  |
| ------ | ------------- | ---------------------------------------------------------- |
| GET    | `/movies`     | Retorna a lista de todos os filmes.                        |
| GET    | `/movies/:id` | Retorna os detalhes de um filme específico com base no ID. |
| POST   | `/movies`     | Adiciona um novo filme à base de dados.                    |
| PUT    | `/movies/:id` | Atualiza os detalhes de um filme existente com base no ID. |
| DELETE | `/movies/:id` | Exclui um filme com base no ID.                            |

## Estrutura de Dados

A tabela `movies` no banco de dados segue o seguinte esquema:

| Campo  | Tipo                                                          | Descrição                                       |
| ------ | ------------------------------------------------------------- | ----------------------------------------------- |
| id     | UUID                                                          | Identificador único do filme (chave primária)   |
| title  | String                                                        | Título do filme                                 |
| rating | Integer                                                       | Avaliação do filme (pode ser um número decimal) |
| plot   | Text                                                          | Enredo ou sinopse do filme                      |
| genre  | Enum: "ação", "comédia", "drama", "terror", "ficção", "crime" | Gênero do filme                                 |

### Exemplo de Dados:

```json
{
  "id": "a549c80f-72d1-4ad5-a394-89ce054af8d5",
  "title": "O Poderoso Chefão",
  "rating": 5,
  "plot": "Michael Corleone, filho mais novo de Vito Corleone, tenta afastar-se dos negócios da família, mas é atraído de volta quando seu pai é ferido. Ele é envolvido em uma teia de traição, poder e vingança, assumindo o controle da família Corleone e tornando-se parte do submundo do crime.",
  "genre": "crime"
}
```

## Deploy

[API Link](https://puc-pos-node-ex-02.onrender.com)
