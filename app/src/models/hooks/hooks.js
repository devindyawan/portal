const { connection } = require("../../config/database.js");

const requestToDb = async (sql) => {
  try {
    const [result, fields] = await connection.query(sql);

    return result;
  } catch (error) {
    return {
      code: error.code,
      sqlMessage: error.sqlMessage,
      sql: error.sql,
    };
  }
};

const useUpdateTable = async (table, arguments) => {
  delete arguments[0].id;

  const setData = Object.keys({ ...arguments[0] })
    .map((key) => `${key} = '${arguments[0][key]}'`)
    .join(", ");

  const _sql = `UPDATE ${table} SET ${setData} WHERE id = ${id};`;

  return await requestToDb(_sql);
};

const useInsertTable = async (table, arguments) => {
  let attributes = [];
  let values = [];

  for (const [attribute, value] of Object.entries(arguments[0])) {
    attributes.push(attribute);
    values.push(Number.isInteger(value) ? `${value}` : `'${value}'`);
  }

  const _sql = `INSERT INTO ${table} (${attributes.join(
    ", "
  )}) VALUES (${values.join(", ")});`;

  return await requestToDb(_sql);
};

const dateFormatInObject = (data, result) => {
  for (const [key, value] of Object.entries(result[0])) {
    data.forEach((element) => {
      if (key === element) {
        result[0][key] = `${value.getFullYear()}-${
          value.getMonth() + 1
        }-${value.getDate()}`;
      }
    });
  }
};

module.exports = {
  requestToDb,
  useUpdateTable,
  useInsertTable,
  dateFormatInObject,
};
