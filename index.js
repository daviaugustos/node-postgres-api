const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(function(req, res, next) {
  if (req.path == "/auth/error" || req.path == "/users" || req.path == "/auth")
    return next();

  if (!req.get("Authorization")) {
    return res
      .status(403)
      .json({ invalid_action_message: "no_credentials_sent" });
  }
  next();
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log("Example app listening on port" + port));

app.get("/users", async (req, res) => {
  const data = {
    login: "Usuário teste",
    password: "senhaTeste"
  };
  console.log("/users - GET", data);
  await setTimeout(() => {
    res.status(200).json(data);
  }, 5000);
});

app.post("/auth", async (req, res) => {
  const { login, password } = req.body;

  const data = {
    invalid_action_message: "",
    permissions: [
      {
        right: "formulario",
        create: true,
        update: true,
        delete: true
      },
      {
        right: "relatorio",
        create: true,
        update: true,
        delete: true
      }
    ],
    token: "Basic Q2FkQ2xpZW50ZTpMVFpleGxzcnYxMjA5"
  };
  console.log("/auth - POST", data);
  await setTimeout(() => {
    res.status(200).json(data);
  }, 5000);
});

//endpoint criado apenas para demonstrar como seria uma resposta com credenciais invalidas
app.post("/auth/error", async (req, res) => {
  const { login, password } = req.body;

  const data = {
    invalid_action_message: "invalid_credentials"
  };
  console.log("/auth/error - POST", data);
  await setTimeout(() => {
    res.status(200).json(data);
  }, 5000);
});

app.get("/formularios/tipos", async (req, res) => {
  const data = {
    form_types: [
      {
        id: 1,
        name: "Housekeeping"
      },
      {
        id: 2,
        name: "Inspeção"
      }
    ]
  };
  console.log("/users - POST", data);
  await setTimeout(() => {
    res.status(200).json(data);
  }, 5000);
});
