const { requestToDb, useInsertTable } = require("./hooks/hooks.js");

async function insertUsers({
  username = "",
  email = "",
  password = "",
  role = "",
  fullname = "",
  id_unit = 0,
}) {
  if (id_unit === 0)
    return {
      message: "id unit must be filled",
    };
  return useInsertTable("users", arguments);
}

const getUsers = async () => {
  const _sql = `SELECT * FROM users;`;

  return await requestToDb(_sql);
};

const getUsersById = async (id = 0) => {
  if (id === 0) return;

  const _sql = `SELECT * FROM users WHERE id = ${id};`;

  return await requestToDb(_sql);
};

async function updateUsers({
  id = 0,
  name = "",
  email = "",
  password = "",
  role = "",
  fullname = "",
  id_unit = 0,
}) {
  if (id === 0) return;

  return useUpdateTable("users", arguments);
}

const deleteUsers = async (id = 0) => {
  if (id === 0) return;

  const _sql = `DELETE FROM users WHERE id = ${id};`;

  return await requestToDb(_sql);
};

module.exports = {
  insertUsers,
  getUsers,
  getUsersById,
  updateUsers,
  deleteUsers,
};
