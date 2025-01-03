const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;
const menuLinks = document.querySelectorAll(".menu__link");
const accordionHeaders = document.querySelectorAll(".accordion__header");

function changeTheme() {
  const currentTheme = rootHtml.getAttribute("data-theme");

  currentTheme === "dark"
    ? rootHtml.setAttribute("data-theme", "light")
    : rootHtml.setAttribute("data-theme", "dark");

  toggleTheme.classList.toggle("bi-sun");
  toggleTheme.classList.toggle("bi-moon-stars");
}

toggleTheme.addEventListener("click", changeTheme);

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const accordionActive = accordionItem.classList.contains("active");

    accordionHeaders.forEach((i) => i.parentElement.classList.remove("active"));

    accordionActive
      ? accordionItem.classList.remove("active")
      : accordionItem.classList.add("active");
  });
});

menuLinks.forEach((item) => {
  item.addEventListener("click", () => {
    menuLinks.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
  });
});
