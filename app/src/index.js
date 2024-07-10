const express = require("express");
const dotenv = require("dotenv");
const { connection } = require("./config/database.js");
const {
  insertPerusahaan,
  getPerusahaan,
  updatePerusahaan,
  deletePerusahaan,
} = require("./models/perusahaan.js");

const app = express();
dotenv.config();

const PORT = process.env.PORT;

// const data = {
//   id: 7,
//   nama_perusahaan: "PT PLN",
//   no_telp: "08123456789",
//   email: "pln_mamen@example.com",
//   alamat: "Jl. Jendral Sudirman No. 1",
// };

deletePerusahaan(7).then((result) => {
  console.log(result);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
