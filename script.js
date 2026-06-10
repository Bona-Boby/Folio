const themeToggle = document.querySelector('#theme-toggle');

/* 1. THEME TOGGLE */
themeToggle.addEventListener('click', () => {
  // Toggle dark mode class on body
  document.body.classList.toggle('dark');

  // Check current mode
  const isDark = document.body.classList.contains('dark');

  // Change icon
  themeToggle.textContent = isDark ? '☀️' : '🌙';
});


/* 2. BACK TO TOP BUTTON */
const toTop = document.querySelector('#to-top');

// Show/hide button on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    toTop.classList.add('show');
  } else {
    toTop.classList.remove('show');
  }
});

// Scroll to top smoothly
toTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
themeToggle = document.querySelector('#theme-toggle');

/* 1. THEME TOGGLE */
themeToggle.addEventListener('click', () => {
  // Toggle dark mode class on body
  document.body.classList.toggle('dark');

  // Check current mode
  const isDark = document.body.classList.contains('dark');

  // Change icon
  themeToggle.textContent = isDark ? '☀️' : '🌙';
});


/* 2. BACK TO TOP BUTTON */
 toTop = document.querySelector('#to-top');

// Show/hide button on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    toTop.classList.add('show');
  } else {
    toTop.classList.remove('show');
  }
});

// Scroll to top smoothly
toTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const projectCount = document.getElementById("projectCount");

function updateCount() {
  const visibleProjects = document.querySelectorAll(
    ".project-card:not(.hidden)"
  ).length;

  projectCount.textContent = visibleProjects;
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {

    filterButtons.forEach(btn =>
      btn.classList.remove("active")
    );

    button.classList.add("active");

    const filter = button.dataset.filter;

    projectCards.forEach(card => {

      const categories =
        card.dataset.category.toLowerCase();

      const shouldShow =
        filter === "all" ||
        categories.includes(filter);

      if (shouldShow) {

        card.classList.remove("hidden");

        setTimeout(() => {
          card.classList.remove("hide");
        }, 10);

      } else {

        card.classList.add("hide");

        setTimeout(() => {
          card.classList.add("hidden");
        }, 350);
      }
    });

    setTimeout(updateCount, 360);
  });
});

updateCount();