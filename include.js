// navbar.html ve footer.html dosyalarını yükler
document.addEventListener("DOMContentLoaded", () => {
  // Navbar ekle
  fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
    })
    .catch(err => console.error("Navbar yüklenemedi:", err));

  // Footer ekle
  fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch(err => console.error("Footer yüklenemedi:", err));
});
