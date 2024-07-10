const { requestToDb } = require("./hooks/hooks.js");

const insertLokasi = async ({ tempat = "", kota = "" }) => {
  const _sql = `INSERT INTO lokasi (tempat, kota) VALUES ('${tempat}', '${kota}');`;

  return await requestToDb(_sql);
};

const getLokasi = async () => {
  const _sql = `SELECT * FROM lokasi;`;

  return await requestToDb(_sql);
};

const getLokasiById = async (id = 0) => {
  if (id === 0) return;

  const _sql = `SELECT * FROM lokasi WHERE id = ${id};`;

  return await requestToDb(_sql);
};

const updateLokasi = async ({ id = 0, tempat = "", kota = "" }) => {
  if (id === 0) return;

  const result = await getLokasiById(id);
  if (result.length === 0) return;

  const _sql = `UPDATE lokasi SET tempat = '${tempat}', kota = '${kota}' WHERE id = ${id};`;

  return await requestToDb(_sql);
};

const deleteLokasi = async (id = 0) => {
  if (id === 0) return;

  const result = await getLokasiById(id);
  if (result.length === 0) return;

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
