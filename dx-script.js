function loadScript(src, callback) {
  const script = document.createElement('script');
  script.src = src;
  script.onload = () => callback && callback();
  document.head.appendChild(script);
}

// Load Swiper first
loadScript("https://unpkg.com/swiper/swiper-bundle.min.js", function () {
  console.log("Swiper loaded");

  // Then load Weblocks
  loadScript("https://weblocks.io/library.js", function () {
    loadScript("https://weblocks.io/script-66-529.js", function () {
      console.log("Weblocks scripts loaded");

      // Load FoxyCart last
      loadScript("https://cdn.foxycart.com/dynasolv/loader.js", function () {
        console.log("FoxyCart loaded");
      });
    });
  });
});




  document.addEventListener("DOMContentLoaded", function () {
    const limit = 150; // character limit
    document.querySelectorAll('.limited-text').forEach(el => {
      const originalText = el.textContent.trim();
      if (originalText.length > limit) {
        el.textContent = originalText.slice(0, limit) + '...';
      }
    });
  });
  
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".page-title");
  const fullTitle = document.title;
  const cleanTitle = fullTitle.split("–")[0].trim(); // strips out branding
  elements.forEach(el => el.textContent = cleanTitle);
});

document.addEventListener("DOMContentLoaded", function () {
  const ogImage = document.querySelector('meta[property="og:image"]')?.getAttribute("content");
  const targetDiv = document.querySelector(".og-background");

  if (ogImage && targetDiv) {
    targetDiv.style.backgroundImage = `url('${ogImage}')`; // <-- this line is fixed
    targetDiv.style.backgroundSize = "cover";
    targetDiv.style.backgroundPosition = "center";
  }
});



  document.addEventListener("DOMContentLoaded", function () {
    const openBtns = document.querySelectorAll(".open-modal-btn");
    const closeBtns = document.querySelectorAll(".close-modal");

    openBtns.forEach(btn => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("data-modal");
        const modal = document.getElementById(targetId);
        if (modal) {
          modal.style.display = "flex"; // Start visible for animation
          requestAnimationFrame(() => {
            modal.classList.add("modal-active");
          });
          document.body.style.overflow = "hidden";
        }
      });
    });

    closeBtns.forEach(btn => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const modal = this.closest(".modal");
        modal.classList.remove("modal-active");
        document.body.style.overflow = "";
        setTimeout(() => {
          modal.style.display = "none";
        }, 300); // Match animation duration
      });
    });
  });
