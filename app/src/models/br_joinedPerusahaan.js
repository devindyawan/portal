const {
  requestToDb,
  useInsertTable,
  useUpdateTable,
} = require("./hooks/hooks.js");

async function insertJoinedPerusahaan({ id_pelatihan = 0, id_perusahaan = 0 }) {
  if (id_pelatihan === 0 && id_perusahaan === 0)
    return {
      code: 400,
      message: "id_pelatihan and id_perusahaan cannot be empty",
    };

  return await useInsertTable("bridge_joined_perusahaan", arguments);
}

const getJoinedPerusahaan = async () => {
  const _sql = `SELECT * FROM bridge_joined_perusahaan;`;

  return await requestToDb(_sql);
};

const getJoinedPerusahaansById = async (id = 0) => {
  if (id === 0) return; // id cannot be empty

  const _sql = `SELECT * FROM bridge_joined_perusahaan WHERE id = ${id};`;

  return await requestToDb(_sql);
};

async function updateJoinedPerusahaan({
  id = 0,
  id_pelatihan = 0,
  id_perusahaan = 0,
}) {
  if (id === 0 && id_pelatihan === 0 && id_perusahaan === 0)
    return {
      code: 400,
      message: "id_pelatihan and id_perusahaan cannot be empty",
    };

  return await useUpdateTable("bridge_joined_perusahaan", arguments);
}

const deleteJoinedPerusahaan = async (id = 0) => {
  if (id === 0) return;

  const _sql = `DELETE FROM bridge_joined_perusahaan WHERE id = ${id};`;

  return await requestToDb(_sql);
};

module.exports = {
  insertJoinedPerusahaan,
  getJoinedPerusahaan,
  getJoinedPerusahaansById,
  updateJoinedPerusahaan,
  deleteJoinedPerusahaan,
};
