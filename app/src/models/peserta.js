const {
  requestToDb,
  dateFormatInObject,
  useUpdateTable,
  useInsertTable,
} = require("./hooks/hooks.js");
const { getPerusahaanById } = require("./perusahaan.js");

// {
//   nama_peserta = "",
//   no_telp = "",
//   email = "",
//   hari_kedatangan = "",
//   penerbangan = "",
//   penginapan = "",
//   transport = "",
//   keterangan ="",
//   id_perusahaan = 0,
// }

async function insertPeserta(...array_of_peserta) {
  let attributes = [];
  let values = [];
  const peserta = arguments[0];

  peserta.forEach((element, index) => {
    let partOfValues = [];

    element.id_perusahaan = arguments[1];

    for (const [attribute, value] of Object.entries(element)) {
      if (index === 0) {
        attributes.push(attribute);
      }

      partOfValues.push(Number.isInteger(value) ? `${value}` : `'${value}'`);
    }

    values.push(`(${partOfValues.join(", ")})`);
  });

  const _sql = `INSERT INTO peserta (${attributes.join(
    ", "
  )}) VALUES ${values.join(", ")};`;

  return await requestToDb(_sql);
}

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

async function updatePeserta({
  id,
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

  return useUpdateTable("peserta", arguments);
}

const deletePeserta = async (id = 0) => {
  if (id === 0) return;

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
