const loadData = document.getElementById('loadData');
const btn = document.getElementById('btnAdd');


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
  const xhr = new XMLHttpRequest();
  xhr.open('POST','insertMahasiswa.php',true);
  xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xhr.onreadystatechange = function(){
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById('status').innerHTML = xhr.responseText;
    }
  }
  xhr.send("nim="+nim+"&nama="+nama+"&matkul_id="+matkul_id);
}

// // ============================ END OF FUNCTION ================================= //
getData();

btn.addEventListener('click',function(){
  const nim = document.querySelector("[name='nim']").value;
  const nama = document.querySelector("[name='nama']").value;
  const matkul_id = document.querySelector("[name='matkul_id']").value;
  insertData(nim,nama,matkul_id);
  getData();
});