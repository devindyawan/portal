const { requestToDb } = require("./hooks/hooks.js");

const insertPelatihanList = async ({
  judul = "",
  kategori = "",
  sertifikasi = "",
}) => {
  const _sql = `INSERT INTO pelatihan_list (judul, kategori, sertifikasi) VALUES ('${judul}', '${kategori}', '${sertifikasi}');`;

  return await requestToDb(_sql);
};

const getPelatihanList = async () => {
  const _sql = `SELECT * FROM pelatihan_list;`;

  return await requestToDb(_sql);
};

const getPelatihanListById = async (id = 0) => {
  if (id === 0) return;

  const _sql = `SELECT * FROM pelatihan_list WHERE id = ${id};`;

  return await requestToDb(_sql);
};

const updatePelatihanList = async ({
  id = 0,
  judul = "",
  kategori = "",
  sertifikasi = "",
}) => {
  if (id === 0) return;

  const result = await getPelatihanListById(id);
  if (result.length === 0) return;

  const _sql = `UPDATE pelatihan_list SET judul = '${judul}', kategori = '${kategori}', sertifikasi = '${sertifikasi}' WHERE id = ${id};`;

  return await requestToDb(_sql);
};

const deletePelatihanList = async (id = 0) => {
  if (id === 0) return;

  const result = await getPelatihanListById(id);
  if (result.length === 0) return;

  const _sql = `DELETE FROM pelatihan_list WHERE id = ${id};`;

  return await requestToDb(_sql);
};

module.exports = {
  insertPelatihanList,
  getPelatihanList,
  getPelatihanListById,
  updatePelatihanList,
  deletePelatihanList,
};
