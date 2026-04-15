# 🐉 API - Treine Seu Dragão

API REST desenvolvida com Node.js, Express e MongoDB para gerenciar registros de treinamento de dragões.

## 🚀 Tecnologias utilizadas

* Node.js
* Express
* MongoDB (Mongoose)
* CORS
* Dotenv

---

## 📁 Estrutura do Projeto

```
backend/
├── controllers/
│   └── treineSeuDragaoController.js
├── models/
│   └── TreineSeuDragaoEntry.js
├── routes/
│   └── treineSeuDragaoRoutes.js
├── server.js
└── .env
```

---

## ⚙️ Configuração do Ambiente

1. Clone o repositório:

```
git clone <URL_DO_REPOSITORIO>
```

2. Instale as dependências:

```
npm install
```

3. Crie um arquivo `.env` na raiz:

```
MONGO_URI=sua_string_do_mongodb
PORT=3000
```

---

## ▶️ Rodando o projeto

```
node server.js
```

ou com nodemon:

```
npx nodemon server.js
```

---

## 🌐 Endpoints da API

### 📌 Listar todos os registros

```
GET /api/entries
```

### 📌 Buscar por ID

```
GET /api/entries/:id
```

### 📌 Criar novo registro

```
POST /api/entries
```

Exemplo de JSON:

```json
{
  "nome": "Banguela",
  "tipo": "Fúria da Noite",
  "instrucao": "Treinar com peixe",
  "dataNascimento": "2020-01-01",
  "metros": 5.5
}
```

### 📌 Atualizar registro

```
PUT /api/entries/:id
```

### 📌 Deletar registro

```
DELETE /api/entries/:id
```

---

## 🧠 Funcionalidades

* CRUD completo
* Validação com Mongoose
* Conexão com MongoDB
* Estrutura MVC simples

---

## ☁️ Deploy

A API pode ser hospedada em plataformas como:

* Render
* Railway
* Vercel (via serverless)

---

## 📌 Observações

* Certifique-se de que o MongoDB está rodando
* Configure corretamente o CORS para acesso externo

---

## 👨‍💻 Autor

Caio Victor de Moura Paschoal
