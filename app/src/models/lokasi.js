const { requestToDb, useInsertTable } = require("./hooks/hooks.js");

async function insertLokasi({ tempat = "", kota = "" }) {
  return useInsertTable("lokasi", arguments);
}

const getLokasi = async () => {
  const _sql = `SELECT * FROM lokasi;`;

  return await requestToDb(_sql);
};

const getLokasiById = async (id = 0) => {
  if (id === 0) return;

  const _sql = `SELECT * FROM lokasi WHERE id = ${id};`;

  return await requestToDb(_sql);
};

async function updateLokasi({ id = 0, tempat = "", kota = "" }) {
  if (id === 0) return;

  return useUpdateTable("lokasi", arguments);
}

const deleteLokasi = async (id = 0) => {
  if (id === 0) return;

  const _sql = `DELETE FROM lokasi WHERE id = ${id};`;

  return await requestToDb(_sql);
};

module.exports = {
  insertLokasi,
  getLokasi,
  getLokasiById,
  updateLokasi,
  deleteLokasi,
};
