const express = require("express");

const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const knex = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: "5432",
    user: "postgres",
    password: "Postgres",
    database: "postgres",
  },
});
app.get("/students", async (req, res) => {
  const result = await knex.select("firstname", "last_name").from("student");
  res.json({
    students: result,
  });
});
app.get("/books", async (req, res) => {
  const result = await knex.select("name", "author").from("books");
  res.json({
    books: result,
  });
});
app.get("/borrow_info", async (req, res) => {
  const result = await knex
    .select("borrowed_by", "borrowed_on", "expected_date")
    .from("borrow_info");
  res.json({
    borrow_info: result,
  });
});
app.listen(1338, () => {
  console.log(`Backend Started at Port 1338`);
});
