const { requestToDb, useInsertTable } = require("./hooks/hooks.js");

async function insertUnits({ id = 0, name = "" }) {
  return useInsertTable("units", arguments);
}

const getUnits = async () => {
  const _sql = `SELECT * FROM units;`;

  return await requestToDb(_sql);
};

const getUnitsById = async (id = 0) => {
  if (id === 0) return;

  const _sql = `SELECT * FROM units WHERE id = ${id};`;

  return await requestToDb(_sql);
};

async function updateUnit({ id = 0, name = "" }) {
  if (id === 0) return;

  return useUpdateTable("units", arguments);
}

const deleteUnits = async (id = 0) => {
  if (id === 0) return;

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
