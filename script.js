// Mengambil elemen <form> dari HTML berdasarkan id="dataForm"
const form = document.getElementById("dataForm");

// Mengambil elemen <div> dari HTML berdasarkan id="hasil"
// Elemen ini akan digunakan untuk menampilkan hasil input
const hasil = document.getElementById("hasil");


// Menunggu sampai user menekan tombol Submit pada form
form.addEventListener("submit", function(event) {

    // Mencegah form melakukan reload/refresh halaman secara otomatis
    event.preventDefault();


    // Mengambil nilai yang diketik user pada input dengan id="name"
    const name = document.getElementById("name").value;

    // Mengambil nilai yang diketik user pada input dengan id="email"
    const email = document.getElementById("email").value;

    // Mengambil nilai yang diketik user pada input dengan id="alamat"
    const alamat = document.getElementById("alamat").value;


    // =========================
    // VALIDASI INPUT
    // =========================

    // Mengecek apakah input nama kosong
    if (name === "") {

        // Menampilkan popup jika nama belum diisi
        alert("Silahkan isi nama !");

        // Menghentikan proses agar tidak lanjut ke bagian berikutnya
        return;
    }


    // Mengecek apakah input email kosong
    if (email === "") {

        // Menampilkan popup jika email belum diisi
        alert("Silahkan isi email !");

        // Menghentikan proses jika email kosong
        return;
    }


    // Mengecek apakah input alamat kosong
    if (alamat === "") {

        // Menampilkan popup jika alamat belum diisi
        alert("Silahkan isi alamat !");

        // Menghentikan proses jika alamat kosong
        return;
    }


    // =========================
    // MENAMPILKAN HASIL
    // =========================

    // Mengisi elemen dengan id="hasil" menggunakan HTML
    // Data yang dimasukkan user akan dimasukkan ke dalam tabel
    hasil.innerHTML = `

        <!-- Membuat tabel untuk menampilkan data -->
        <table>

            <!-- Membuat baris pertama sebagai header tabel -->
            <tr>

                <!-- Membuat kolom header untuk nama -->
                <th>Name</th>

                <!-- Membuat kolom header untuk email -->
                <th>Email</th>

                <!-- Membuat kolom header untuk alamat -->
                <th>Alamat</th>

            </tr>

            <!-- Membuat baris untuk data user -->
            <tr>

                <!-- Menampilkan nilai dari variabel name -->
                <td>${name}</td>

                <!-- Menampilkan nilai dari variabel email -->
                <td>${email}</td>

                <!-- Menampilkan nilai dari variabel alamat -->
                <td>${alamat}</td>

            </tr>

        </table>
    `;


    // Mengosongkan semua input setelah data berhasil disubmit
    form.reset();

});
