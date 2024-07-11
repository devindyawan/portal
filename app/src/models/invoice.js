const {
  requestToDb,
  useInsertTable,
  useUpdateTable,
  dateFormatInObject,
} = require("./hooks/hooks.js");

invoice = {
  id: "",
  nomor_invoice: "",
  harga: "",
  pajak: "",
  konf_pajak: "",
  terbayar: "",
  status_pembayaran: "",
  efaktur: "",
  inv_pengiriman: "",
  tgl_pengiriman_sertifikat: "",
  penagihan_nama: "",
  penagihan_kontak: "",
  cashback: "",
  rekening_cashback: "",
  tgl_cashback: "",
  id_pelatihan: "",
  id_perusahaan: "",
};

async function insertInvoice({
  nomor_invoice = "",
  harga = "",
  pajak = "",
  konf_pajak = "",
  terbayar = "",
  status_pembayaran = "",
  efaktur = "",
  inv_pengiriman = "",
  tgl_pengiriman_sertifikat = "",
  penagihan_nama = "",
  penagihan_kontak = "",
  cashback = "",
  rekening_cashback = "",
  tgl_cashback = "",
  id_pelatihan = "",
  id_perusahaan = "",
}) {
  return useInsertTable("invoice", arguments);
}

const getInvoice = async () => {
  const _sql = `SELECT * FROM invoice;`;
  let result = await requestToDb(_sql);

  dateFormatInObject(["tgl_pengiriman_sertifikat", "tgl_cashback"], result);

  return result;
};

const getInvoiceById = async (id = 0) => {
  if (id === 0) return;

  const _sql = `SELECT * FROM invoice WHERE id = ${id};`;
  let result = await requestToDb(_sql);

  dateFormatInObject(["tgl_pengiriman_sertifikat", "tgl_cashback"], result);

  return result;
};

async function updateInvoice({
  id,
  nomor_invoice = "",
  harga = "",
  pajak = "",
  konf_pajak = "",
  terbayar = "",
  status_pembayaran = "",
  efaktur = "",
  inv_pengiriman = "",
  tgl_pengiriman_sertifikat = "",
  penagihan_nama = "",
  penagihan_kontak = "",
  cashback = "",
  rekening_cashback = "",
  tgl_cashback = "",
  id_pelatihan = "",
  id_perusahaan = "",
}) {
  if (id === 0) return;

  return useUpdateTable("invoice", arguments);
}

const deleteInvoice = async (id = 0) => {
  if (id === 0) return;

  const _sql = `DELETE FROM invoice WHERE id = ${id};`;

  return await requestToDb(_sql);
};

module.exports = {
  insertInvoice,
  getInvoice,
  getInvoiceById,
  updateInvoice,
  deleteInvoice,
};
