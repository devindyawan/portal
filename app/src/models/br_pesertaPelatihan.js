const {
  requestToDb,
  useInsertTable,
  useUpdateTable,
} = require("./hooks/hooks.js");

async function insertPesertaPelatihan({ id_peserta, id_pelatihan, id_user }) {
  return useInsertTable("br_pesertaPelatihan", arguments);
}

const getPesertaPelatihan = async () => {
  const _sql = `SELECT * FROM br_pesertaPelatihan;`;

  return await requestToDb(_sql);
};

const getPesertaPelatihanById = async (id = 0) => {
  if (id === 0) return;

  const _sql = `SELECT * FROM br_pesertaPelatihan WHERE id = ${id};`;

  return await requestToDb(_sql);
};

async function updatePesertaPelatihan({
  id,
  id_peserta,
  id_pelatihan,
  id_user,
}) {
  if (id === 0) return;

  return useUpdateTable("br_pesertaPelatihan", arguments);
}

const deletePesertaPelatihan = async (id = 0) => {
  if (id === 0) return;

  const _sql = `DELETE FROM br_pesertaPelatihan WHERE id = ${id};`;

  return await requestToDb(_sql);
};

module.exports = {
  insertPesertaPelatihan,
  getPesertaPelatihan,
  getPesertaPelatihanById,
  updatePesertaPelatihan,
  deletePesertaPelatihan,
};
