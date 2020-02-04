// Wrapping all the code in a function with an if(!terms) statement to check if there are any terms before executing the code. If there are no terms on the page, the JS will not try to keep running the code.
function scrollToAccept() {
  const terms = document.querySelector('.terms-and-conditions');

  // Checking of terms, if none it will quit out of this function

  if (!terms) {
    return;
  }

  const button = document.querySelector('button');
  let lastScrollPosition = 0;

  function scrollToEnd() {
    lastScrollPosition = window.scrollY;
    console.log(lastScrollPosition);
    if (terms.scrollHeight - terms.clientHeight === terms.scrollTop) {
      console.log('its at the bottom');
      button.removeAttribute('disabled');
    } else {
      button.setAttribute('disabled');
    }
  }

  terms.addEventListener('scroll', scrollToEnd);
}
