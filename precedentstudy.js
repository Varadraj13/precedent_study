console.log("Precedent Study Website Loaded");

// Optional JS features
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      console.log(`Link clicked: ${link.href}`);
    });
  });
});
