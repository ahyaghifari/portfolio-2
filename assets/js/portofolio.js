function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= -10 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScrollWebs() {
  const elements = document.querySelectorAll('.web-portofolios');

  elements.forEach(element => {
    if (isInViewport(element)) {
      element.classList.add('animate')
    }
  });
}
function handleScrollPs() {
  const elements = document.querySelectorAll('.ps-image');

  elements.forEach(element => {
    if (isInViewport(element)) {
      element.classList.add('animate')
    }
  });
}

window.addEventListener('scroll', handleScrollWebs);
window.addEventListener('scroll', handleScrollPs);

handleScrollWebs()
handleScrollPs()