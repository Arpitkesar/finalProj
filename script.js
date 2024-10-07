// Get the modal, button, and close elements
const modal = document.getElementById('skillModal');
const addSkillBtn = document.getElementById('addSkillBtn');
const closeModalBtn = document.getElementById('closeModal');

// Open the modal when the "Add Skill" button is clicked
addSkillBtn.addEventListener('click', () => {
  modal.style.display = 'flex'; // Show the modal
});

// Close the modal when the "Cancel" button is clicked
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none'; // Hide the modal
});

// Close the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none'; // Hide the modal
  }
});
