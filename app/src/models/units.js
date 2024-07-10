const { requestToDb } = require("./hooks/hooks.js");

const insertUnits = async ({ name = "" }) => {
  const _sql = `INSERT INTO units (name) VALUES ('${name}');`;

  return await requestToDb(_sql);
};

const getUnits = async () => {
  const _sql = `SELECT * FROM units;`;

  return await requestToDb(_sql);
};

const getUnitsById = async (id = 0) => {
  if (id === 0) return;

  const _sql = `SELECT * FROM units WHERE id = ${id};`;

  return await requestToDb(_sql);
};

const updateUnit = async ({ id = 0, name = "" }) => {
  if (id === 0) return;

  const result = await getUnitsById(id);
  if (result.length === 0) return;

  const _sql = `UPDATE units SET name = '${name}' WHERE id = ${id};`;

  return await requestToDb(_sql);
};

const deleteUnits = async (id = 0) => {
  if (id === 0) return;

  const result = await getUnitsById(id);
  if (result.length === 0) return;

  const _sql = `DELETE FROM units WHERE id = ${id};`;

  return await requestToDb(_sql);
};

module.exports = {
  insertUnits,
  getUnits,
  getUnitsById,
  updateUnit,
  deleteUnits,
};
