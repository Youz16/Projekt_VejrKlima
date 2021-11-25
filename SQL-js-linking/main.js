const { Client } = require("pg");

const klient = new Client({
    user: "postgres",
    host: "localhost",
    database: "Food",
    password: "PostgresAdmin",
    port: 5432
})

klient.connect();

const qry = "SELECT food_item FROM food_tmp LIMIT 20";

klient.query(qry, (err, res) => {
    if (err){
        console.error(err)
        return;
    }
    res.rows.forEach(row => console.log(row['food_item']));

    klient.end();
});