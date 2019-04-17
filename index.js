const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());

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
    login: login,
    password: password,
    token: "Basic Q2FkQ2xpZW50ZTpMVFpleGxzcnYxMjA5"
  };
  console.log("/users - POST", data);
  await setTimeout(() => {
    res.status(200).json(data);
  }, 5000);
});

app.post("/auth/error", async (req, res) => {
  const { login, password } = req.body;

  const data = {
    invalid_action_message: "invalid_credentials"
  };
  console.log("/users - POST", data);
  await setTimeout(() => {
    res.status(200).json(data);
  }, 5000);
});
