const dataFile = require("./data/v_permintaan (1).json");
const userData = require("./data/v_user.json");
const unitData = require("./data/t_unit.json");

const { insertUnits } = require("../src/models/units");
const { insertUsers } = require("../src/models/users");
const { insertPerusahaan } = require("../src/models/perusahaan");
const { insertPeserta } = require("../src/models/peserta");
const { insertPelatihanList } = require("../src/models/pelatihanList");
const { insertLokasi } = require("../src/models/lokasi");
const { insertInvoice } = require("../src/models/invoice")

const migrateClassData = async () => {
  const { data } = dataFile;

  let perusahaan = {
    nama_perusahaan: "",
    no_telp: "",
    email: "",
    alamat: "",
  };

  let peserta = [];

  let pelatihan_list = {
    judul: "",
    kategori: "",
    sertifikasi: ""
  }

  let lokasi = {
    tempat: "",
    kota: ""
  }

  let invoice = {
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
    divisi: "",
    rekening_cashback: "",
    tgl_cashback: "",
    tgl_terbayar: "",
    id_pelatihan: "",
    id_perusahaan: "",
  };

  for (let index = 0; index < data.length; index++) {
    const { data_perusahaan } = data[index];

    // if perusahaan is empty then continue
    if (data_perusahaan === null || data_perusahaan === undefined) continue

    const perus = JSON.parse(data_perusahaan);
    const migratePesertaPerusahaan = async (perus) => {
      let idPerusahaan = [];
      let idPeserta = [];
      let idInvoice = []

      for (const perusahaanIteration of perus) {
        // set perusahaan
        perusahaan.nama_perusahaan = perusahaanIteration.perusahaan;
        const resultPerusahaan = await insertPerusahaan(perusahaan);

        idPerusahaan.push(resultPerusahaan.insertId);

        invoice = {
          harga: parseInt(perusahaanIteration.harga),
          pajak: perusahaanIteration.pajak,
          konf_pajak: perusahaanIteration.konf_pajak,
          status_pembayaran: perusahaanIteration.status_pembayaran,
          nomor_invoice: perusahaanIteration.nomor_invoice,
          efaktur: perusahaanIteration.efaktur,
          cashback: perusahaanIteration.cashback,
          inv_pengiriman: perusahaanIteration.pengiriman_invoice,
          penagihan_kontak: perusahaanIteration.telp,
          penagihan_nama: perusahaanIteration.cp_penagihan,
          divisi: perusahaanIteration.divisi,
          tgl_pengiriman_sertifikat: perusahaanIteration.tgl_pengiriman_sertifikat,
          rekening_cashback: perusahaanIteration.rek_cashback,
          tgl_cashback: perusahaanIteration.tgl_tf_cashback,
          tgl_terbayar: perusahaanIteration.tgl_bayar,
          id_perusahaan: resultPerusahaan.insertId,
        }

        const resultInvoice = await insertInvoice(invoice)
        idInvoice.push(resultInvoice.insertId)

        // iterasi peserta
        let arrayOfPeserta = perusahaanIteration.peserta ?? []

        for (const pesertaItaration of arrayOfPeserta) {
          peserta.push({
            nama_peserta: pesertaItaration.nama,
            no_telp: pesertaItaration.telp,
            email: pesertaItaration.email,
            hari_kedatangan:
              pesertaItaration.tgl_penjemputan === "0000-00-00 00:00:00"
                ? ""
                : pesertaItaration.tgl_penjemputan,
            penerbangan: pesertaItaration.penerbangan,
            penginapan: pesertaItaration.penginapan,
            transport: pesertaItaration.transportasi,
            keterangan: pesertaItaration.ket,
          });
        }

        const resultPeserta = await insertPeserta(
          peserta,
          resultPerusahaan.insertId
        );

        if (resultPeserta.affectedRows !== 1) {
          for (
            let index = resultPeserta.insertId;
            index < resultPeserta.insertId + resultPeserta.affectedRows;
            index++
          ) {
            idPeserta.push(index);
          }
        } else {
          idPeserta.push(resultPeserta.insertId);
        }

        // reset
        peserta = [];
      }

      //   ID Peserta and ID Perusahaan
      return {
        idPerusahaan,
        idPeserta,
        idInvoice
      };

    };

    const migratePelatihanList = async () => {
      pelatihan_list = {
        judul: data[index].judul,
        kategori: data[index].kategori,
      }

      return await insertPelatihanList(pelatihan_list);
    }

    const migrateLokasi = async () => {
      lokasi = {
        tempat: data[index].tempat_pelaksanaan,
        kota: data[index].kota_pelaksanaan
      }

      return await insertLokasi(lokasi);
    }

    // idPerusahaan and idPeserta
    let result = await migratePesertaPerusahaan(perus)

    console.log(result)
    if (index === 500) break

  }
};

const migrateUserData = async () => {
  console.log("Migration User Data ...");
  const { data } = userData;

  let count = 0;
  const post = async () => {
    for (const element of data) {
      const body = {
        username: element.username,
        password: element.password,
        role: element.jenis,
        fullname: element.nama,
        id_unit: element.id_unit,
      };

      let result = await insertUsers(body);
      if (result.affectedRows > 0) count++;
    }
  };

  post()
    .then(() =>
      console.log({
        message: "berhasil",
        data_masuk: count,
      })
    )
    .catch((err) => console.log(err));
};

const migrationUnitData = async () => {
  console.log("Migration Unit Data ...");
  const { data } = unitData;

  const post = async () => {
    for (const element of data) {
      let result = await insertUnits({
        id: element.id,
        name: element.nama,
      });
    }
  };

  post()
    .then(() => console.log("berhasil"))
    .catch((err) => console.log(err));
};

migrateClassData();
// migrationUnitData().then(migrateUserData());
