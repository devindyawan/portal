const {
  requestToDb,
  checkArgument,
  dateFormatInObject,
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

const insertPelatihan = async ({
  jenis = "",
  jumlah_peserta = "",
  status = "",
  fasilitas = "",
  pic = "",
  tanggal_mulai = "",
  tanggal_selesai = "",
  waktu_mulai = "",
  metode = "offline",
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
}) => {
  const _sql = `INSERT INTO pelatihan (
    jenis,
    jumlah_peserta,
    anggota_peserta,
    status,
    fasilitas,
    pic,
    tanggal_mulai,
    tanggal_selesai,
    waktu_mulai,
    metode,
    instruktur,
    note_kaUnit,
    note_accounting,
    note_pic,
    note_admin,
    note_logistik,
    id_lokasi,
    id_pelatihan,
    id_unit,
    id_sertifikat
  ) VALUES (
    '${jenis}',
    '${jumlah_peserta}'
    '${anggota_peserta}',
    '${status}',
    '${fasilitas}',
    '${pic}',
    '${tanggal_mulai}',
    '${tanggal_selesai}',
    '${waktu_mulai}',
    '${metode}',
    '${instruktur}',
    '${note_kaUnit}',
    '${note_accounting}',
    '${note_pic}',
    '${note_admin}',
    '${note_logistik}',
    ${id_lokasi},
    ${id_pelatihan},
    ${id_unit},
    ${id_sertifikat});`;

  return await requestToDb(_sql);
};

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

  const result = await getPelatihanById(id);
  if (result.length === 0) return;

  const newArgs = checkArgument(arguments, result);

  const _sql = `UPDATE pelatihan SET
    jenis = '${newArgs.jenis}',
    jumlah_peserta = '${newArgs.jumlah_peserta}',
    anggota_peserta = '${newArgs.anggota_peserta}',
    status = '${newArgs.status}',
    fasilitas = '${newArgs.fasilitas}',
    pic = '${newArgs.pic}',
    tanggal_mulai = '${newArgs.tanggal_mulai}',
    tanggal_selesai = '${newArgs.tanggal_selesai}',
    waktu_mulai = '${newArgs.waktu_mulai}',
    metode = '${newArgs.metode}',
    instruktur = '${newArgs.instruktur}',
    note_kaUnit = '${newArgs.note_kaUnit}',
    note_accounting = '${newArgs.note_accounting}',
    note_pic = '${newArgs.note_pic}',
    note_admin = '${newArgs.note_admin}',
    note_logistik = '${newArgs.note_logistik}',
    id_lokasi = ${newArgs.id_lokasi},
    id_pelatihan = ${newArgs.id_pelatihan},
    id_unit = ${newArgs.id_unit},
    id_sertifikat = ${newArgs.id_sertifikat} WHERE id = ${id};`;
}

const deletePelatihan = async (id = 0) => {};
