const express = require("express");
const dotenv = require("dotenv");

const pelatihanRouter = require("./routers/pelatihan");

const app = express();
dotenv.config();
app.use(express.json());

const PORT = process.env.PORT;

app.use("/portal/api/pelatihan", pelatihanRouter);

// const lokasi = {
//   tempat: "Hotel Malang",
//   kota: "Batu",
// };

// const newPeserta = {
//   nama_peserta: "Wahyono",
//   no_telp: "546546",
//   email: "aksdghaksjd@gmail.com",
//   hari_kedatangan: "2023-03-10",
//   penerbangan: "jauh",
//   penginapan: "",
//   transport: "",
//   id_perusahaan: 6,
// };

// insertPeserta(newPeserta).then((result) => {
//   console.log(result);
// });

// updatePeserta(newPeserta).then((result) => {
//   console.log(result);
// });

// insertPeserta();

// insertLokasi(lokasi).then((result) => {
//   console.log(result);
// });

// deletePeserta(10).then((result) => {
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
