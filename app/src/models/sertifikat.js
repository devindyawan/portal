const { requestToDb } = require("./hooks/hooks.js");

const sertifikat = {
  id: "",
  status: "",
  pengirim: "",
  tgl_diterima: "",
  keterangan: "",
};

const insertSertifikat = async ({
  status = "",
  pengirim = "",
  tgl_diterima = "",
  keterangan = "",
}) => {
  const _sql = `INSERT INTO sertifikat (status, pengirim, tgl_diterima, keterangan) VALUES ('${status}', '${pengirim}', '${tgl_diterima}', '${keterangan}');`;

  return await requestToDb(_sql);
};

const getSertifikat = async () => {
  const _sql = `SELECT * FROM sertifikat;`;

  return await requestToDb(_sql);
};

const getSertifikatById = async (id = 0) => {
  if (id === 0) return;

  const _sql = `SELECT * FROM sertifikat WHERE id = ${id};`;

  return await requestToDb(_sql);
};

const updateSertifikat = async ({
  id = 0,
  status = "",
  pengirim = "",
  tgl_diterima = "",
  keterangan = "",
}) => {
  if (id === 0) return;

  const result = await getSertifikatById(id);
  if (result.length === 0) return;

  const _sql = `UPDATE sertifikat SET status = '${status}', pengirim = '${pengirim}', tgl_diterima = '${tgl_diterima}', keterangan = '${keterangan}' WHERE id = ${id};`;

  return await requestToDb(_sql);
};

const deleteSertifikat = async (id = 0) => {
  if (id === 0) return;

  const result = await getSertifikatById(id);
  if (result.length === 0) return;

  const _sql = `DELETE FROM sertifikat WHERE id = ${id};`;

  return await requestToDb(_sql);
};

module.exports = {
  insertSertifikat,
  getSertifikat,
  getSertifikatById,
  updateSertifikat,
  deleteSertifikat,
};
