const express = require('express');
const cors = require('cors');
const { Client  } = require('pg');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(3000, () => console.log('Example app listening on port 3000!'));

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'tradeappdb',
    password: '123qweasd',
    port: 5432,
});
client.connect();
  
app.get('/users', async (req, res) => {
    const data = {
        login: 'Usuário teste',
        password: 'senhaTeste'
    };

    await setInterval(()=>{
        res.status(200).json(data);
    },  5000);
});

app.post('/users', (req, res) => {
    const { login, password } = req.body;
    const query = {
        text: 'INSERT INTO users(login, password) VALUES($1, $2)',
        values: [login, password],
    };

    client.query(query)
        .then((resultSet) => {
            const data = resultSet;
            res.status(200).json(data);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
});