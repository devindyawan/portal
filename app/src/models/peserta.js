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

async function updatePeserta(
  args = {
    id: 0,
    nama_peserta: "",
    no_telp: "",
    email: "",
    hari_kedatangan: "",
    penerbangan: "",
    penginapan: "",
    transport: "",
    id_perusahaan: 0,
  }
) {
  let id = args.id ?? 0,
    id_perusahaan = args.id_perusahaan ?? 0;
  if (id === 0 || id_perusahaan === 0) return;
  delete args.id;
  delete args.id_perusahaan;
  let setData = "";
  for (let k in args) {
    if (setData !== "") setData += ",";
    setData += `${k} = '${args[k]}'`;
  }
  const _sql = `UPDATE peserta SET ${setData} WHERE id=${id}`;

  return await requestToDb(_sql);
}
async function updatePesertax({
  id = 0,
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

  const resultPeserta = await getPesertaById(id);
  if (resultPeserta.length === 0) return;

  const result = await getPerusahaanById(id_perusahaan);
  if (result.length === 0) return;

  const newArgs = checkArgument(arguments, resultPeserta);

  const _sql = `UPDATE peserta SET nama_peserta='${newArgs.nama_peserta}', no_telp='${newArgs.no_telp}', email='${newArgs.email}', hari_kedatangan='${newArgs.hari_kedatangan}', penerbangan='${newArgs.penerbangan}', penginapan='${newArgs.penginapan}', transport='${newArgs.transport}', id_perusahaan=${newArgs.id_perusahaan} WHERE id = ${id};`;

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
