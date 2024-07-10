const {
  requestToDb,
  checkArgument,
  dateFormatInObject,
} = require("./hooks/hooks.js");
const { getPerusahaanById } = require("./perusahaan.js");
const moment = require("moment");

const insertPeserta = async ({
  nama_peserta = "",
  no_telp = "",
  email = "",
  hari_kedatangan = "",
  penerbangan = "",
  penginapan = "",
  transport = "",
  id_perusahaan = 0,
}) => {
  if (id_perusahaan === 0) return;

  const result = await getPerusahaanById(id_perusahaan);
  if (result.length === 0) return;

  const _sql = `INSERT INTO peserta (nama_peserta, no_telp, email, hari_kedatangan, penerbangan, penginapan, transport, id_perusahaan) VALUES ('${nama_peserta}', '${no_telp}', '${email}', '${hari_kedatangan}', '${penerbangan}', '${penginapan}', '${transport}', ${id_perusahaan});`;

  return await requestToDb(_sql);
};

const getPeserta = async () => {
  const _sql = `SELECT * FROM peserta;`;
  const result = await requestToDb(_sql);

  dateFormatInObject(["hari_kedatangan"], result);

  return result;
};

const getPesertaById = async (id = 0) => {
  if (id === 0) return;

  const _sql = `SELECT * FROM peserta WHERE id = ${id};`;
  const result = await requestToDb(_sql);

  dateFormatInObject(["hari_kedatangan"], result);

  return result;
};

async function updatePeserta({
  id,
  nama_peserta = "",
  no_telp = "",
  email = "",
  hari_kedatangan = "",
  penerbangan = "",
  penginapan = "",
  transport = "",
  id_perusahaan = 0,
}) {
  if (id === 0 || id_perusahaan === 0) return;

  delete arguments[0].id;

  const setData = Object.keys({ ...arguments[0] })
    .map((key) => `${key} = '${arguments[0][key]}'`)
    .join(", ");


  const _sql = `UPDATE peserta SET ${setData} WHERE id = ${id};`;

  return await requestToDb(_sql);
}

const deletePeserta = async (id = 0) => {
  if (id === 0) return;

  const result = await getPesertaById(id);
  if (result.length === 0) return;

  const _sql = `DELETE FROM peserta WHERE id = ${id};`;

  return await requestToDb(_sql);
};

module.exports = {
  insertPeserta,
  getPeserta,
  getPesertaById,
  updatePeserta,
  deletePeserta,
};
