const pelatihan = {
  id: "INT PRIMARY KEY AUTOINCREMENT",
  jenis: "VARCHAR(255)", // public, iht
  jumlah_peserta: "INT NOT NULL",
  status: "VARCHAR(255)", //permintaan, fix
  fasilitas: "VARCHAR(255)",
  pic: "VARCHAR(255)",
  tanggal_mulai: "DATE NOT NULL",
  tanggal_selesai: "DATE NOT NULL",
  waktu_mulai: "TIME NOT NULL",
  metode: "VARCHAR(255)", //online, offline
  instruktur: "VARCHAR(255)",
  note_kaUnit: "VARCHAR(255)",
  note_accounting: "VARCHAR(255)",
  note_pic: "VARCHAR(255)",
  note_admin: "VARCHAR(255)",
  note_logistik: "VARCHAR(255)",
  id_lokasi: "INT NOT NULL",
  id_pelatihan: "INT NOT NULL",
  id_invoice: "INT NOT NULL",
  id_unit: "INT NOT NULL",
  id_sertifikat: "INT NOT NULL",
};

const lokasi = {
  id: "INT PRIMARY KEY AUTOINCREMENT",
  tempat: "VARCHAR(255)",
  kota: "VARCHAR(255)",
};

const pelatihan_list = {
  id: "INT PRIMARY KEY AUTOINCREMENT",
  judul: "VARCHAR(255)",
  kategori: "VARCHAR(255)",
  sertifikasi: "VARCHAR(255)", // y, n
};

const sertifikat = {
  id: "INT PRIMARY KEY AUTOINCREMENT",
  status: "VARCHAR(255)",
  pengirim: "VARCHAR(255)",
  tgl_diterima: "DATE",
  keterangan: "VARCHAR(255)",
};

const joined_perusahaan = {
  id: "INT PRIMARY KEY AUTOINCREMENT",
  id_pelatihan: "INT NOT NULL",
  id_perusahaan: "INT NOT NULL",
};
