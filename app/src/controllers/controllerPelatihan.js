const { pesertaPerusahaan } = require("./helper/helper");
const { insertPelatihanList } = require("../models/pelatihanList");
const { insertLokasi } = require("../models/lokasi");

const postPelatihan = async (req, res) => {
  const { peserta_perusahaan, pelatihan_detail, lokasi } = req.body;

  //   const postPelatihanDetail = await insertPelatihanList(pelatihan_detail);
  //   const postLokasi = await insertLokasi(lokasi);
  const postPeserta = await pesertaPerusahaan(peserta_perusahaan);

  res.json(postPeserta);
};

module.exports = { postPelatihan };
