const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const jwt = require('jsonwebtoken');

var pgp = require("pg-promise")(/*options*/);
let db = pgp("sql://account:username@localhost:port/database_name");

app.use(cors());

app.use('/api/id', express.json(), (req, res) => {
    const uid = req.body.uid;
    db.any("SELECT t2.\"UID\", t2.\"Name\" FROM table_1", [uid])
    .then(function (result) {
        res.send(result);
    })
    .catch(function (error) {
        console.log(error);
    });
});
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
