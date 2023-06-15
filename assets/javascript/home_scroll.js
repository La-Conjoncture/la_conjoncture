const targetElement = document.getElementById('arrow');
const footer = document.getElementById('footer');
const fixedDiv = document.getElementById('fixedDiv');

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.bottom > 0 &&
    rect.top < (window.innerHeight || document.documentElement.clientHeight)
  );
}

function handleScroll() {
  if (isElementInViewport(footer)) {
    targetElement.style.opacity = 0;
    fixedDiv.style.opacity = 0;
  } else {
    targetElement.style.opacity = 1;
    fixedDiv.style.opacity = 1;
  }
}

window.addEventListener('scroll', handleScroll);
