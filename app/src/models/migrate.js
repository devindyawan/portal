const { connection } = require("../config/database.js");
const { parseToSQL } = require("./portal/parseSQL");

const migrate = async () => {
  const { sql, sqlIndex } = parseToSQL();

  sql.forEach(async (element, index) => {
    const [result, fields] = await connection.query(element);
    console.log(result);
  });

  setTimeout(() => {
    sqlIndex.forEach(async (element) => {
      const [result, fields] = await connection.query(element);
      console.log(result);
    });
  }, 10000)

  return;
};

migrate();
