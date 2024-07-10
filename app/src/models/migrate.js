const { connection } = require("../config/database.js");
const { parseToSQL } = require("./portal/parseSQL");

const migrate = async () => {
  const SQL = parseToSQL();

  SQL.forEach(async (element, index) => {
    const [result, fields] = await connection.query(element);
    console.log(result);
  });

  return;
};

migrate();
