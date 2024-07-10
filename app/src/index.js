const express = require("express");
const dotenv = require("dotenv");
const { connection } = require("./config/database.js");

const {
  getPelatihanList,
  getPelatihanListById,
  deletePelatihanList,
  updatePelatihanList,
  insertPelatihanList,
} = require("./models/pelatihanList.js");
const { getPerusahaanById } = require("./models/perusahaan.js");
const { updatePeserta, insertPeserta } = require("./models/peserta.js");

const app = express();
dotenv.config();

const PORT = process.env.PORT;

const lokasi = {
  tempat: "Hotel Malang",
  kota: "Batu",
};

updatePeserta({
  id: 1,
  nama_peserta: "Budi",
  penerbangan: "akeh",
  hari_kedatangan: "2025-05-02",
  id_perusahaan: 6,
}).then((result) => {
  console.log(result);
});

// insertPeserta();

// insertLokasi(lokasi).then((result) => {
//   console.log(result);
// });

// deleteLokasi(3).then((result) => {
//   console.log(result);
// });

// deletePeserta(2).then((result) => {
//   console.log(result);
// });

// insertPeserta(peserta).then((result) => {
//   console.log(result);
// });

// getPerusahaanById(7).then((result) => {
//   console.log(result);
// });

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
