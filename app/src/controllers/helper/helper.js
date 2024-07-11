const { insertPeserta } = require("../../models/peserta");
const { insertPerusahaan } = require("../../models/perusahaan");

const pesertaPerusahaan = async (data) => {
  for (const iterator of data) {
    const { peserta } = iterator;
    const { perusahaan } = iterator;

    const resultPerusahaan = await insertPerusahaan(perusahaan);
    const resultPeserta = await insertPeserta(
      peserta,
      resultPerusahaan.insertId
    );

    result = {
      ...resultPeserta,
      ...resultPerusahaan.insertId,
    };
  }

  return result;
};

module.exports = { pesertaPerusahaan };
