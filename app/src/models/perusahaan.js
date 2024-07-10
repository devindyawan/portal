const { connection } = require("../config/database.js");

const perusahaan = {
  nama_perusahaan: "",
  no_telp: "",
  email: "",
  alamat: "",
};

const insertPerusahaan = async ({
  nama_perusahaan = "",
  no_telp = "",
  email = "",
  alamat = "",
}) => {
  const _sql = `INSERT INTO perusahaan (nama_perusahaan, no_telp, email, alamat) VALUES ('${nama_perusahaan}', '${no_telp}', '${email}', '${alamat}');`;

  try {
    const [result, fields] = await connection.query(_sql);

    return {
      affectedRows: result.affectedRows,
      id: result.insertId,
    };
  } catch (error) {
    return error;
  }
};

const getPerusahaan = async () => {
  const _sql = `SELECT * FROM perusahaan;`;

  try {
    const [result, fields] = await connection.query(_sql);
    return result;
  } catch (error) {
    return error;
  }
};

const updatePerusahaan = async ({
  id = 0,
  nama_perusahaan = "",
  no_telp = "",
  email = "",
  alamat = "",
}) => {
  if (id === 0) return;

  const _sql = `UPDATE perusahaan SET nama_perusahaan = '${nama_perusahaan}', no_telp = '${no_telp}', email = '${email}', alamat = '${alamat}' WHERE id = ${id};`;

  try {
    const [result, fields] = await connection.query(_sql);

    return {
      affectedRows: result.affectedRows,
    };
  } catch (error) {
    return error;
  }
};

const deletePerusahaan = async (id = 0) => {
  if (id === 0) return;

  const _sql = `DELETE FROM perusahaan WHERE id = ${id};`;

  try {
    const [result, fields] = await connection.query(_sql);

    return {
      affectedRows: result.affectedRows,
    };
  } catch (error) {
    return error;
  }
};

module.exports = {
  insertPerusahaan,
  getPerusahaan,
  updatePerusahaan,
  deletePerusahaan,
};
