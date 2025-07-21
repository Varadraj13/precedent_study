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

document.addEventListener('DOMContentLoaded', function () {
  // Collapsible logic (existing)
  const triggers = document.querySelectorAll('.collapsible-trigger');
  const contents = document.querySelectorAll('.collapsible-content');
  contents.forEach(content => { content.style.maxHeight = null; });
  triggers.forEach(trigger => {
    trigger.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
      const content = this.nextElementSibling;
      if (!expanded) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = null;
      }
    });
  });

  // Image modal/zoom logic
  const imgThumb = document.getElementById('actor-network-img');
  const modal = document.getElementById('img-modal');
  const modalImg = document.getElementById('img-modal-content');
  let zoomed = false;

  if (imgThumb && modal && modalImg) {
    imgThumb.addEventListener('click', function () {
      modal.style.display = 'flex';
      modalImg.src = imgThumb.src;
      modalImg.style.transform = 'scale(1)';
      zoomed = false;
    });
    modal.addEventListener('click', function (e) {
      if (e.target === modal || e.target === modalImg) {
        if (zoomed) {
          modalImg.style.transform = 'scale(1)';
          zoomed = false;
        } else {
          modal.style.display = 'none';
          modalImg.src = '';
        }
      }
    });
    modalImg.addEventListener('click', function (e) {
      e.stopPropagation();
      if (!zoomed) {
        modalImg.style.transform = 'scale(2)';
        zoomed = true;
      } else {
        modalImg.style.transform = 'scale(1)';
        zoomed = false;
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        modal.style.display = 'none';
        modalImg.src = '';
        zoomed = false;
      }
    });
  }
});
