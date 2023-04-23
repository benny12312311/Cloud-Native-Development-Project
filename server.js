const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const jwt = require('jsonwebtoken');

var pgp = require("pg-promise")(/*options*/);
let db = pgp("sql://account:username@localhost:port/database_name");

app.use(cors());

app.use('/api/uid', express.json(), (req, res) => {
    const askinguid = req.body.curuid;
    db.any("SELECT t2.\"UID\", t2.\"Status\", t2.\"Date\", t3.\"Note\" FROM table_1", [askinguid])
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
