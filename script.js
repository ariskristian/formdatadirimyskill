const form = document.getElementById("dataForm");
const hasil = document.getElementById("hasil");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const alamat = document.getElementById("alamat").value;

    // Validasi
    if (name === "") {
        alert("Silahkan isi nama !");
        return;
    }

    if (email === "") {
        alert("Silahkan isi email !");
        return;
    }

    if (alamat === "") {
        alert("Silahkan isi alamat !");
        return;
    }

    // Menampilkan data
    hasil.innerHTML = `
        <table>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Alamat</th>
            </tr>
            <tr>
                <td>${name}</td>
                <td>${email}</td>
                <td>${alamat}</td>
            </tr>
        </table>
    `;

});
