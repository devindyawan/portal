const { requestToDb } = require("./hooks/hooks.js");

const insertPerusahaan = async ({
  nama_perusahaan = "",
  no_telp = "",
  email = "",
  alamat = "",
}) => {
  const _sql = `INSERT INTO perusahaan (nama_perusahaan, no_telp, email, alamat) VALUES ('${nama_perusahaan}', '${no_telp}', '${email}', '${alamat}');`;

  return await requestToDb(_sql);
};

const getPerusahaan = async () => {
  const _sql = `SELECT * FROM perusahaan;`;

  return await requestToDb(_sql);
};

const getPerusahaanById = async (id = 0) => {
  if (id === 0) return;

  const _sql = `SELECT * FROM perusahaan WHERE id = ${id};`;

  return await requestToDb(_sql);
};

const updatePerusahaan = async ({
  id = 0,
  nama_perusahaan = "",
  no_telp = "",
  email = "",
  alamat = "",
}) => {
  if (id === 0) return;

  const result = await getPerusahaansById(id);
  if (result.length === 0) return;

  const _sql = `UPDATE perusahaan SET nama_perusahaan = '${nama_perusahaan}', no_telp = '${no_telp}', email = '${email}', alamat = '${alamat}' WHERE id = ${id};`;

  return await requestToDb(_sql);
};

const deletePerusahaan = async (id = 0) => {
  if (id === 0) return;

  const result = await getPerusahaansById(id);
  if (result.length === 0) return;

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
