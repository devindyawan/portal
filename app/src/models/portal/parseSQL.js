const { scheme, foreign_keys, indexes } = require("./scheme");

const parseToSQL = () => {
  let sql = [];

  //   CREATE TABLE
  for (const [table, value] of Object.entries(scheme)) {
    let attributeString = [];

    for (const [key, attribute] of Object.entries(value)) {
      attributeString.push(`${key} ${attribute}`);
    }

    let _sql = `CREATE TABLE IF NOT EXISTS ${table} (${attributeString.join(
      ", "
    )})`;

    sql.push(_sql);
  }

  //   FOREIGN KEY
  for (const [foreign, value] of Object.entries(foreign_keys)) {
    let tableAndAttribute = [];

    for (const [table, attribute] of Object.entries(value)) {
      tableAndAttribute.push([table, attribute]);
    }

    let _sql = `ALTER TABLE ${tableAndAttribute[0][0]} ADD CONSTRAINT ${foreign} FOREIGN KEY (${tableAndAttribute[0][1]}) REFERENCES ${tableAndAttribute[1][0]}(${tableAndAttribute[1][1]})`;

    sql.push(_sql);
  }

  //   CREATE INDEX
  for (const [indexName, value] of Object.entries(indexes)) {
    for (const [table, attribute] of Object.entries(value)) {
      let _sql = `ALTER TABLE ${table} ADD INDEX ${indexName}(${attribute})`;

      sql.push(_sql);
    }
  }

  return sql;
};

console.log(parseToSQL());

module.exports = { parseToSQL };
