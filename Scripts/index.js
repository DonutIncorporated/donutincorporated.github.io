function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute("data-bs-theme");

  const sunIcon = document.getElementById("sun-icon");
  const moonIcon = document.getElementById("moon-icon");

  if (currentTheme === 'dark') {
    var newTheme = 'light';

    sunIcon.classList.remove("d-none");
    moonIcon.classList.add("d-none");
  } else {
    var newTheme = 'dark';

    sunIcon.classList.add("d-none");
    moonIcon.classList.remove("d-none");
  }

  body.setAttribute("data-bs-theme", newTheme);
}