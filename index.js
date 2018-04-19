const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

app.listen(port, () => console.log('Example app listening on port' + port));
 
app.get('/users', async (req, res) => {
    const data = {
        login: 'Usuário teste',
        password: 'senhaTeste'
    };

    await setTimeout(()=>{
        res.status(200).json(data);
    },  5000);
});

app.post('/users', async (req, res) => {
    const { login, password } = req.body;

    const data = {
        sucess: true,
        login: login,
        password: password
    };
    console.log(data);
    await setTimeout(()=>{
        res.status(200).json(data);
    },  5000);
});