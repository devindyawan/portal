const scheme = {
  pelatihan: {
    id: "INT PRIMARY KEY AUTO_INCREMENT",
    jenis: "VARCHAR(255) NOT NULL", // public, iht
    jumlah_peserta: "INT NOT NULL",
    status: "VARCHAR(255) NOT NULL", //permintaan, fix
    fasilitas: "VARCHAR(255)",
    pic: "VARCHAR(255)",
    tanggal_mulai: "DATE NOT NULL",
    tanggal_selesai: "DATE NOT NULL",
    waktu_mulai: "TIME NOT NULL",
    metode: "VARCHAR(255) NOT NULL", //online, offline
    instruktur: "VARCHAR(255)",
    note_kaUnit: "VARCHAR(255)",
    note_accounting: "VARCHAR(255)",
    note_pic: "VARCHAR(255)",
    note_admin: "VARCHAR(255)",
    note_logistik: "VARCHAR(255)",
    id_lokasi: "INT",
    id_pelatihan: "INT NOT NULL",
    id_unit: "INT NOT NULL",
    id_sertifikat: "INT NOT NULL",
  },

  lokasi: {
    id: "INT PRIMARY KEY AUTO_INCREMENT",
    tempat: "VARCHAR(255)",
    kota: "VARCHAR(255)",
  },

  pelatihan_list: {
    id: "INT PRIMARY KEY AUTO_INCREMENT",
    judul: "VARCHAR(255) NOT NULL",
    kategori: "VARCHAR(255) NOT NULL",
    sertifikasi: "VARCHAR(255)", // y, n
  },

  sertifikat: {
    id: "INT PRIMARY KEY AUTO_INCREMENT",
    status: "VARCHAR(255) DEFAULT ''",
    pengirim: "VARCHAR(255) DEFAULT ''",
    tgl_diterima: "DATE",
    keterangan: "VARCHAR(255) DEFAULT ''",
  },

  bridge_joined_perusahaan: {
    id: "INT PRIMARY KEY AUTO_INCREMENT",
    id_pelatihan: "INT NOT NULL",
    id_perusahaan: "INT NOT NULL",
  },

  perusahaan: {
    id: "INT PRIMARY KEY AUTO_INCREMENT",
    nama_perusahaan: "VARCHAR(255) NOT NULL",
    no_telp: "VARCHAR(255) NOT NULL DEFAULT ''",
    email: "VARCHAR(255) NOT NULL DEFAULT ''",
    alamat: "VARCHAR(255) NOT NULL DEFAULT ''",
  },

  peserta: {
    id: "INT PRIMARY KEY AUTO_INCREMENT",
    nama_peserta: "VARCHAR(255) NOT NULL",
    no_telp: "VARCHAR(255) NOT NULL DEFAULT ''",
    email: "VARCHAR(255) NOT NULL DEFAULT ''",
    hari_kedatangan: "DATE",
    penerbangan: "VARCHAR(255) DEFAULT ''",
    penginapan: "VARCHAR(255) DEFAULT ''",
    transport: "VARCHAR(255) DEFAULT ''",
    id_perusahaan: "INT NOT NULL",
  },

  bridge_peserta_pelatihan: {
    id: "INT PRIMARY KEY AUTO_INCREMENT",
    id_peserta: "INT NOT NULL",
    id_pelatihan: "INT NOT NULL",
    id_user: "INT NOT NULL",
  },

  invoice: {
    id: "INT PRIMARY KEY AUTO_INCREMENT",
    nomor_invoice: "VARCHAR(255) NOT NULL",
    harga: "INT",
    pajak: "VARCHAR(255) DEFAULT ''",
    konf_pajak: "VARCHAR(255) DEFAULT ''",
    terbayar: "INT",
    status_pembayaran: "VARCHAR(255) DEFAULT ''",
    efaktur: "VARCHAR(255) DEFAULT ''",
    inv_pengiriman: "VARCHAR(255) DEFAULT ''",
    tgl_pengiriman_sertifikat: "DATE",
    penagihan_nama: "VARCHAR(255) DEFAULT ''",
    penagihan_kontak: "VARCHAR(255) DEFAULT ''",
    cashback: "INT",
    rekening_cashback: "VARCHAR(255) DEFAULT ''",
    tgl_cashback: "DATE",
    id_pelatihan: "INT NOT NULL",
    id_perusahaan: "INT NOT NULL",
  },

  users: {
    id: "INT PRIMARY KEY AUTO_INCREMENT",
    username: "VARCHAR(255) NOT NULL",
    password: "VARCHAR(255) NOT NULL",
    role: "VARCHAR(255) NOT NULL",
    fullname: "VARCHAR(255) NOT NULL",
    id_unit: "INT NOT NULL",
  },

  units: {
    id: "INT PRIMARY KEY AUTO_INCREMENT",
    name: "VARCHAR(255) NOT NULL",
  },

  tokens: {
    id: "INT PRIMARY KEY AUTO_INCREMENT",
    username: "VARCHAR(255) NOT NULL",
    token: "VARCHAR(255) NOT NULL",
    ip: "VARCHAR(255) NOT NULL",
    status: "VARCHAR(255) NOT NULL",
    approved: "VARCHAR(255) NOT NULL",
    time: "DATETIME NOT NULL",
    otime: "DATETIME NOT NULL",
  },
};

const foreign_keys = {
  fk_lokasi: {
    pelatihan: "id_lokasi",
    lokasi: "id",
  },

  fk_pelatihan_list: {
    pelatihan: "id_pelatihan",
    pelatihan_list: "id",
  },

  fk_sertifikat: {
    pelatihan: "id_sertifikat",
    sertifikat: "id",
  },

  fk_unit: {
    pelatihan: "id_unit",
    units: "id",
  },

  fk_invoice: {
    invoice: "id_pelatihan",
    pelatihan: "id",
  },

  fk_peserta_pelatihan: {
    bridge_peserta_pelatihan: "id_pelatihan",
    pelatihan: "id",
  },

  fk_joined_perusahaan: {
    bridge_joined_perusahaan: "id_pelatihan",
    pelatihan: "id",
  },

  fk_perusahaan: {
    bridge_joined_perusahaan: "id_perusahaan",
    perusahaan: "id",
  },

  fk_inv_perusahaan: {
    invoice: "id_perusahaan",
    perusahaan: "id",
  },

  fk_peserta_perusahaan: {
    peserta: "id_perusahaan",
    perusahaan: "id",
  },

  fk_peserta_joined: {
    bridge_peserta_pelatihan: "id_peserta",
    peserta: "id",
  },

  fk_joined_peserta_user: {
    bridge_peserta_pelatihan: "id_user",
    users: "id",
  },

  fk_users_unit: {
    users: "id_unit",
    units: "id",
  },
};

const indexes = {
  lokasi_kota_index: {
    lokasi: "kota",
  },
  lokasi_tempat_index: {
    lokasi: "tempat",
  },
  pelatihan_judul_index: {
    pelatihan_list: "judul",
  },
  perusahaan_nama_index: {
    perusahaan: "nama_perusahaan",
  },
  peserta_nama_index: {
    peserta: "nama_peserta",
  },
  users_name_index: {
    users: "fullname",
  },
};

module.exports = { scheme, foreign_keys, indexes };
