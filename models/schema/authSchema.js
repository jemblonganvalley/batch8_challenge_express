//buat schema Auth dengan spesifikasi sebagai berikut,
// id => increment
// email => string
// password => string
// created_at => timestamps

const db = require("../connection");

async function createTableAuth() {
  return await db.schema
    .createTable("auth", (table) => {
      table.increments("id").notNullable();
      table.string("email").notNullable();
      table.string("password").notNullable();
      table.timestamp("created_at").defaultTo(db.fn.now());
      table.unique("email");
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.log(err));
}

createTableAuth().then((data) => {
  process.exit();
});
