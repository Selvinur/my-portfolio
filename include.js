// navbar.html ve footer.html dosyalarını yükler
document.addEventListener("DOMContentLoaded", () => {
  
  fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
    })
    .catch(err => console.error("Navbar yüklenemedi:", err));

  fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch(err => console.error("Footer yüklenemedi:", err));
});
