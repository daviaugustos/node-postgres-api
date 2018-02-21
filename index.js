const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(3000, () => console.log('Example app listening on port 3000!'));
 
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

    await setTimeout(()=>{
        res.status(200).json(data);
    },  5000);
});