const loadData = document.getElementById('loadData');
const btnAdd = document.getElementById('btnAdd');
const nim = document.querySelector("[name='nim']").value;
const nama = document.querySelector("[name='nama']").value;
const matkul_id = document.querySelector("[name='matkul_id']").value;

function getData() {
  loadData.innerHTML = '';

  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.status == 200 && this.readyState == 4) {
      const mahasiswa = JSON.parse(this.response);
      let rowMahasiswa = '';
      for (let i = 0; i < mahasiswa.length; i++) {
        rowMahasiswa += `
        <tr>
          <td>${mahasiswa[i].id}</td>
          <td>${mahasiswa[i].nim}</td>
          <td>${mahasiswa[i].nama}</td>
          <td>${mahasiswa[i].matkul_id}</td>
        </tr>
      `
      }
      loadData.innerHTML = rowMahasiswa;
    }
  }
  xhttp.open("GET", "getMahasiswa.php", true);
  xhttp.send();
}

function insertData(nim, nama, matkul_id) {
  let xhttp = new XMLHttpRequest();
  let mahasiswa = [];
  xhttp.onreadystatechange = function() {
    if (this.status == 200 && this.readyState == 4) {
      mahasiswa = {
        nim: nim,
        nama: nama,
        matkul_id: matkul_id
      }
      mahasiswa = JSON.stringify(mahasiswa);
    }
  }
  xhttp.open("POST", "insertMahasiswa.php");
  xhttp.send(mahasiswa);
  alert(this.response);
}

// ============================ END OF FUNCTION ================================= //
getData();

btnAdd.addEventListener('click', function() {
  insertData(nim, nama, matkul_id);
  getData();
});
