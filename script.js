// Show modal on any subscribe click
document.addEventListener("DOMContentLoaded", function () {
  const subscribeButtons = document.querySelectorAll("button");
  const modal = document.getElementById("emailModal");
  const closeBtn = document.querySelector(".close");
  const accessBtn =  document.querySelector(".access-btn");

  subscribeButtons.forEach((btn) => {
    if (btn.textContent.trim().toLowerCase() === "subscribe") {
      btn.addEventListener("click", () => {
        modal.style.display = "flex";
      });
    }
  });

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
  
  accessBtn.onclick = function () {
    
  }
});
