document.addEventListener("DOMContentLoaded", function() {
  const formSelection = document.querySelector(".form-selection");
  const forms = document.querySelectorAll("form");

  // Show the selected form and hide the others
  formSelection.addEventListener("change", function() {
    const selectedForm = document.querySelector('input[name="form-type"]:checked').value;
    forms.forEach(function(form) {
      form.style.display = (form.id === selectedForm) ? "block" : "none";
    });
  });

  // Handle form submission
  forms.forEach(function(form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const formData = new FormData(form);
      // Perform any necessary form data handling or AJAX submission here
      console.log([...formData.entries()]);
    });
  });
});
