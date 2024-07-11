const {
  requestToDb,
  useInsertTable,
  useUpdateTable,
} = require("./hooks/hooks.js");

const sertifikat = {
  id: "",
  status: "",
  pengirim: "",
  tgl_diterima: "",
  keterangan: "",
};

async function insertSertifikat({
  status = "",
  pengirim = "",
  tgl_diterima = "",
  keterangan = "",
}) {
  return useInsertTable("sertifikat", arguments);
}

const getSertifikat = async () => {
  const _sql = `SELECT * FROM sertifikat;`;

  return await requestToDb(_sql);
};

const getSertifikatById = async (id = 0) => {
  if (id === 0) return;

  const _sql = `SELECT * FROM sertifikat WHERE id = ${id};`;

  return await requestToDb(_sql);
};

async function updateSertifikat({
  id = 0,
  status = "",
  pengirim = "",
  tgl_diterima = "",
  keterangan = "",
}) {
  if (id === 0) return;

  return useUpdateTable("sertifikat", arguments);
}

const deleteSertifikat = async (id = 0) => {
  if (id === 0) return;

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
