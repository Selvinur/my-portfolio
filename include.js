// navbar.html ve footer.html dosyalarını yükler, dili yönetir
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  const isEnglish = path.includes("_en.html");

  const navbarFile = isEnglish ? "navbar_en.html" : "navbar.html";
  const footerFile = isEnglish ? "footer_en.html" : "footer.html";

  // Navbar'ı yükle ve yönlendirmeleri/aktif sayfayı ata
  fetch(navbarFile)
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
      setupNavbar(isEnglish);
    })
    .catch(err => console.error("Navbar yüklenemedi:", err));

  // Footer'ı yükle
  fetch(footerFile)
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch(err => console.error("Footer yüklenemedi:", err));
});

function setupNavbar(isEnglish) {
  let currentPage = window.location.pathname.split("/").pop();
  if (!currentPage || currentPage === "/") {
    currentPage = isEnglish ? "index_en.html" : "index.html";
  }
  
  // 1. Dil geçiş butonunun linkini dinamik olarak ayarla
  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    let targetPage = "";
    if (isEnglish) {
      targetPage = currentPage.replace("_en.html", ".html");
    } else {
      targetPage = currentPage.replace(".html", "_en.html");
    }
    
    // Hash'i (#resume gibi) koru
    langToggle.href = targetPage + window.location.hash;
    
    // Hash değişimlerini dinle ve dil butonunun linkini güncelle
    window.addEventListener("hashchange", () => {
      langToggle.href = targetPage + window.location.hash;
    });
  }

  // 2. Aktif menü linkini işaretle
  const menuLinks = document.querySelectorAll(".menu a");
  menuLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href && !href.startsWith("#") && href !== "#") {
      const linkPage = href.split("#")[0];
      const currentBasePage = currentPage.split("#")[0];
      if (linkPage === currentBasePage) {
        link.classList.add("active");
      }
    }
  });
}
