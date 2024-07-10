const { connection } = require("../../config/database.js");
const moment = require("moment");

const requestToDb = async (sql) => {
  try {
    const [result, fields] = await connection.query(sql);

    return result;
  } catch (error) {
    return error;
  }
};

function checkArgument(arguments, result) {
  //   get arguments function
  const args = arguments[0];

  //   check if args is empty
  for (const [key, value] of Object.entries(result[0])) {
    if (key === "id") continue;

    if (args[key] !== undefined) {
      result[0][key] = args[key];
    }
  }

  return result[0];
}

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

module.exports = { requestToDb, checkArgument, dateFormatInObject };
