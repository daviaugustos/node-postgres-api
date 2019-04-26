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
      .json({ invalidActionMessage: "no_credentials_sent" });
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
  }, 1500);
});

app.post("/auth", async (req, res) => {
  const { login, password } = req.body;

  const data = {
    invalidActionMessage: "",
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
  }, 1500);
});

//endpoint criado apenas para demonstrar como seria uma resposta com credenciais invalidas
app.post("/auth/error", async (req, res) => {
  const { login, password } = req.body;

  const data = {
    invalidActionMessage: "invalid_credentials"
  };
  console.log("/auth/error - POST", data);
  await setTimeout(() => {
    res.status(200).json(data);
  }, 1500);
});

app.get("/formularios/tipos", async (req, res) => {
  const data = {
    invalidActionMessage: "",
    formTypes: [
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
  console.log("/formularios/tipos - GET", data);
  await setTimeout(() => {
    res.status(200).json(data);
  }, 1500);
});

app.get("/formularios/tipos", async (req, res) => {
  const data = {
    invalidActionMessage: "",
    formTypes: [
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
  console.log("/formularios/tipos - GET", data);
  await setTimeout(() => {
    res.status(200).json(data);
  }, 1500);
});

app.post("/formularios", async (req, res) => {
  const { typeId } = req.body;

  const data = {
    invalidActionMessage: "",
    forms: [
      {
        id: 1,
        title: "FO-00SSMA0029"
      },
      {
        id: 2,
        title: "FO-00SSMA0030"
      },
      {
        id: 3,
        title: "FO-00SSMA0031"
      },
      {
        id: 4,
        title: "FO-00SSMA0032"
      },
      {
        id: 5,
        title: "FO-00SSMA0033"
      }
    ]
  };
  console.log("/formularios - POST", data);
  await setTimeout(() => {
    res.status(200).json(data);
  }, 1500);
});
