const {
  requestToDb,
  useInsertTable,
  useUpdateTable,
} = require("./hooks/hooks.js");

async function insertPelatihanList({
  judul = "",
  kategori = "",
  sertifikasi = "",
}) {
  return useInsertTable("pelatihan_list", arguments);
}

const getPelatihanList = async () => {
  const _sql = `SELECT * FROM pelatihan_list;`;

  return await requestToDb(_sql);
};

const getPelatihanListById = async (id = 0) => {
  if (id === 0) return;

  const _sql = `SELECT * FROM pelatihan_list WHERE id = ${id};`;

  return await requestToDb(_sql);
};

async function updatePelatihanList({
  id,
  judul = "",
  kategori = "",
  sertifikasi = "",
}) {
  if (id === 0) return;

  return useUpdateTable("pelatihan_list", arguments);
}

const deletePelatihanList = async (id = 0) => {
  if (id === 0) return;

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
