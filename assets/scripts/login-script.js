/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

/* Comennt : Membuat variable untuk menyimpan informasi email dan password. */
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

/* Comment : Menambahkan aksi klik pada button. */
loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();
    // TODO 1 : Mendapatkan input email dan password pengguna dari form.
    /* Comment : Menambahkan nilai dari masing-masing input (email dan password) ketika tombol ditekan. */
    const email = inputEmailElement.value;
    const password = inputPasswordElement.value;
  
    /* TODO 2 : Buat Logika perbandingan dengan kondisi:
       Jika variabel email identik dengan expectedEmail dan password identik dengan expectedPassword, panggil fungsi goToHome().
       Jika tidak, maka panggil fungsi showPopUp().
     */
    /* Comment : Memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan. */
    if (email == expectedEmail && password == expectedPassword){
      /* Comment : Jika sesuai maka program akan berpindah ke halaman home. */
        goToHome();
      /* Comment : Namun jika tidak sesuai makan akan menampilkan informasi bahwa input salah. */
    } else {
      showPopUp();
    }
});
