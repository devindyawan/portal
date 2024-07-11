const {
  requestToDb,
  checkArgument,
  dateFormatInObject,
  useInsertTable,
  useUpdateTable,
} = require("./hooks/hooks.js");
const {} = require("./lokasi.js");

const pelatihan = {
  id: "",
  jenis: "", // public, iht
  jumlah_peserta: "",
  status: "", //permintaan, fix
  fasilitas: "",
  pic: "",
  tanggal_mulai: "",
  tanggal_selesai: "",
  waktu_mulai: "",
  metode: "", //online, offline
  instruktur: "",
  note_kaUnit: "",
  note_accounting: "",
  note_pic: "",
  note_admin: "",
  note_logistik: "",
  id_lokasi: "",
  id_pelatihan: "",
  id_unit: "",
  id_sertifikat: "",
};

async function insertPelatihan({
  jenis = "",
  jumlah_peserta = "",
  status = "",
  fasilitas = "",
  pic = "",
  tanggal_mulai = "",
  tanggal_selesai = "",
  waktu_mulai = "",
  metode = "",
  instruktur = "",
  note_kaUnit = "",
  note_accounting = "",
  note_pic = "",
  note_admin = "",
  note_logistik = "",
  id_lokasi = null,
  id_pelatihan = 0,
  id_unit = 0,
  id_sertifikat = 0,
}) {
  return useInsertTable("pelatihan", arguments);
}

const getPelatihan = async () => {
  const _sql = `SELECT * FROM pelatihan;`;
  const result = await requestToDb(_sql);

  dateFormatInObject(["tanggal_mulai", "tanggal_selesai"], result);

  return result;
};

const getPelatihanById = async (id = 0) => {
  if (id === 0) return;

  const _sql = `SELECT * FROM pelatihan WHERE id = ${id};`;
  const result = await requestToDb(_sql);

  dateFormatInObject(["tanggal_mulai", "tanggal_selesai"], result);

  return result;
};

async function updatePelatihan({
  id = 0,
  jenis = "",
  jumlah_peserta = "",
  status = "",
  fasilitas = "",
  pic = "",
  tanggal_mulai = "",
  tanggal_selesai = "",
  waktu_mulai = "",
  metode = "",
  instruktur = "",
  note_kaUnit = "",
  note_accounting = "",
  note_pic = "",
  note_admin = "",
  note_logistik = "",
  id_lokasi = null,
  id_pelatihan = 0,
  id_unit = 0,
  id_sertifikat = 0,
}) {
  if (id === 0) return;

  return useUpdateTable("pelatihan", arguments);
}

const deletePelatihan = async (id = 0) => {
  if (id === 0) return;

  const _sql = `DELETE FROM pelatihan WHERE id = ${id};`;

  return await requestToDb(_sql);
};

module.exports = {
  insertPelatihan,
  getPelatihan,
  getPelatihanById,
  updatePelatihan,
  deletePelatihan,
};
