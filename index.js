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
  }, 500);
});

app.post("/auth", async (req, res) => {
  const { login, password } = req.body;

  const data = {
    invalidActionMessage: "",
    offlineData: {
      date: "2019-05-13",
      formTypes: [
        {
          id: 1,
          name: "HouseKeeping",
          forms: [
            {
              id: 1,
              code: "00150",
              revision: 3,
              createdAt: "2019-01-01",
              formTypeId: 1,
              title: "FHK-00SSMA0029",
              location: {
                cityName: "São José do Rio Preto",
                id: 1
              },
              questions: [
                {
                  id: 1,
                  title:
                    "Os funcionários e prestadores estão utilizando o crachá corretamente?"
                },
                {
                  id: 2,
                  title: "Os funcionários estão adequadamente bem treinados?"
                },
                {
                  id: 3,
                  title: "O nível de segurança é satisfatório?"
                }
              ]
            },
            {
              id: 2,
              code: "00151",
              revision: 6,
              createdAt: "2019-02-02",
              formTypeId: 1,
              title: "FHK-00SSMA0028",
              location: {
                cityName: "Olímpia",
                id: 2
              },
              questions: []
            }
          ]
        },
        {
          id: 2,
          name: "Inspeção",
          forms: [
            {
              id: 3,
              code: "00152",
              revision: 4,
              createdAt: "2019-03-03",
              formTypeId: 2,
              title: "FI-00SSMA0022",
              location: {
                cityName: "São José do Rio Preto",
                id: 1
              },
              questions: []
            },
            {
              id: 4,
              code: "00153",
              revision: 5,
              createdAt: "2019-03-03",
              formTypeId: 2,
              title: "FI-00SSMA0023",
              location: {
                cityName: "Olímpia",
                id: 2
              },
              questions: []
            }
          ]
        }
      ]
    },
    permissions: [
      {
        right: "formularios",
        create: true,
        read: true,
        update: true,
        delete: true
      },
      {
        right: "meio_ambiente",
        create: true,
        read: true,
        update: true,
        delete: true
      },
      {
        right: "treinamento",
        create: true,
        read: true,
        update: true,
        delete: true
      },
      {
        right: "respostas",
        create: true,
        read: true,
        update: true,
        delete: true
      },
      {
        right: "relatorio",
        create: true,
        read: true,
        update: true,
        delete: true
      }
    ],
    token: "Basic Q2FkQ2xpZW50ZTpMVFpleGxzcnYxMjA5"
  };
  console.log("/auth - POST", data);
  await setTimeout(() => {
    res.status(200).json(data);
  }, 500);
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
  }, 500);
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
  }, 500);
});

app.post("/formularios/respondidos/consultar", async (req, res) => {
  const { startDate, endDate, formTypeId, formTitle, userId } = req.body;
  const data = {
    invalidActionMessage: "",
    answeredForms: []
    // answeredForms: [
    //   {
    //     id: 1,
    //     title: "FO-00SSMA0029"
    //   },
    //   {
    //     id: 2,
    //     title: "FO-00SSMA0030"
    //   },
    //   {
    //     id: 3,
    //     title: "FO-00SSMA0031"
    //   }
    // ]
  };
  console.log("/formularios/respondidos/consultar - POST", data);
  await setTimeout(() => {
    res.status(200).json(data);
  }, 500);
});

app.post("/formularios", async (req, res) => {
  const { typeId } = req.body;

  const data = {
    invalidActionMessage: "",
    forms: [
      {
        id: 1,
        title: "Formulários de Caldeiras Ultratérmicas Aquecidas",
        location: {
          cityName: "São José do Rio Preto",
          id: 1
        }
      },
      {
        id: 2,
        title:
          "Formulários de Caldeiras Ultratérmicas Aquecidas do Estado de São Paulo",
        location: {
          cityName: "Potirendaba",
          id: 2
        }
      },
      {
        id: 3,
        title: "FO-00SSMA0031",
        location: {
          cityName: "Votuporanga",
          id: 3
        }
      },
      {
        id: 4,
        title: "FO-00SSMA0032",
        location: {
          cityName: "São José do Rio Preto",
          id: 1
        }
      },
      {
        id: 5,
        title: "FO-00SSMA0033",
        location: {
          cityName: "Votuporanga",
          id: 3
        }
      }
    ]
  };
  console.log("/formularios - POST", data);
  await setTimeout(() => {
    res.status(200).json(data);
  }, 500);
});
