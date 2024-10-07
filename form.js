const modal = document.getElementById("skillModal");
const addSkillBtn = document.getElementById("addSkillBtn");
const closeModalBtn = document.getElementById("closeModal");


addSkillBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});


closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
