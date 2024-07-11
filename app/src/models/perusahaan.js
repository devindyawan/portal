const {
  requestToDb,
  useInsertTable,
  useUpdateTable,
} = require("./hooks/hooks.js");

async function insertPerusahaan({
  nama_perusahaan = "",
  no_telp = "",
  email = "",
  alamat = "",
}) {
  return useInsertTable("perusahaan", arguments);
}

const getPerusahaan = async () => {
  const _sql = `SELECT * FROM perusahaan;`;

  return await requestToDb(_sql);
};

const getPerusahaanById = async (id = 0) => {
  if (id === 0) return;

  const _sql = `SELECT * FROM perusahaan WHERE id = ${id};`;

  return await requestToDb(_sql);
};

async function updatePerusahaan({
  id = 0,
  nama_perusahaan = "",
  no_telp = "",
  email = "",
  alamat = "",
}) {
  if (id === 0) return;

  return useUpdateTable("perusahaan", arguments);
}

const deletePerusahaan = async (id = 0) => {
  if (id === 0) return;

  const _sql = `DELETE FROM perusahaan WHERE id = ${id};`;

  return await requestToDb(_sql);
};

module.exports = {
  insertPerusahaan,
  getPerusahaan,
  updatePerusahaan,
  deletePerusahaan,
  getPerusahaanById,
};
