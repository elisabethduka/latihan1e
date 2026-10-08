document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("formkontak");

  form.addEventListener("submit", function (event) {
      event.preventDefault();

      const nomorWhatsApp = "6282140592355";

      const nama = document.getElementById("nama").value;
      const email = document.getElementById("email").value;
      const telepon = document.getElementById("telepon").value;
      const minat = document.getElementById("minat").value;
      const pesan = document.getElementById("pesan").value;

      const isiPesan = `Halo, saya menghubungi melalui website CV.
Nama Lengkap : ${nama}
email : ${email}
No.Telepon : ${telepon}
Bidang Minat : ${minat}
Pesan : ${pesan}`;

      const pesanEncoded = encodeURIComponent(isiPesan);
      const urlWhatsApp = `https://wa.me/${nomorWhatsApp}?text=${pesanEncoded}`;

      window.open(urlWhatsApp, "_blank");
  });
});