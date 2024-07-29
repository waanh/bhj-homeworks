function initRotator(rotatorElement) {
    const cases = rotatorElement.querySelectorAll('.rotator__case');
    let currentCaseIndex = 0;
  
    function changeCase() {
      cases[currentCaseIndex].classList.remove('rotator__case_active');
      cases[currentCaseIndex].style.color = '';
      currentCaseIndex = (currentCaseIndex + 1) % cases.length;
      const nextCase = cases[currentCaseIndex];
      nextCase.classList.add('rotator__case_active');
      nextCase.style.color = nextCase.dataset.color;
      setTimeout(changeCase, nextCase.dataset.speed);
    }
  
    cases[currentCaseIndex].style.color = cases[currentCaseIndex].dataset.color;
    setTimeout(changeCase, cases[currentCaseIndex].dataset.speed);
  }
  
const rotators = document.querySelectorAll('.rotator');
rotators.forEach(rotator => {
    initRotator(rotator);
});
  