function scrollToAccept() {
  // Wrapping all the code in a function with an if(!terms) statement to check if there are any terms before executing the code. If there are no terms on the page, the JS will not try to keep running the code.

  const terms = document.querySelector('.terms-and-conditions');
  const watch = document.querySelector('.watch');
  const button = document.querySelector('.accept');
  // Checking of terms, if none it will quit out of this function

  if (!terms) {
    return;
  }

  function obCallback(payload) {
    console.log(payload[0].intersectionRatio);
    if (payload[0].intersectionRatio >= 0.5) {
      button.disabled = false;
      // Stop observing after the event has happened
      // ob.unobserve(terms.lastElementChild);
    } else {
      button.disabled = true;
    }
  }

  // This is a watcher
  const ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 0.5,
  });

  ob.observe(terms.lastElementChild);
}

scrollToAccept();
