const { connection } = require("../config/database.js");
const { parseToSQL } = require("./portal/parseSQL");

const migrate = async () => {
  const { sql } = parseToSQL();

  sql.forEach(async (element, index) => {
    const [result, fields] = await connection.query(element);
    console.log(result);
  });

  return;
};

const setIndex = async () => {
  const { sqlIndex } = parseToSQL();

  sqlIndex.forEach(async (element) => {
    const [result, fields] = await connection.query(element);
    console.log(result);
  });
};

migrate().then(setIndex());
