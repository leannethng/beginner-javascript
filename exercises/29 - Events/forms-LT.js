const wes = document.querySelector('.wes');

wes.addEventListener('click', function(e) {
  e.preventDefault();
  const shouldChangePage = confirm('This page might be malicious');
  if (shouldChangePage) {
    window.location = event.currentTarget.href;
  }

  // if(!shouldChangePage){
  //   e.preventDefault;
  // }
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function(e) {
  console.log(e);

  console.dir(event.currentTarget.name.value);
  console.dir(event.currentTarget.email.value);
  console.dir(event.currentTarget.agree.checked);

  const name = event.currentTarget.name.value;
  if (name.includes('chad')) {
    alert('sorry!');
    e.preventDefault();
  }
});

function logEvent(e) {
  console.log(e.type);
  console.log(event.currentTarget.value);
  console.log(e.keyCode === 80);
  // console.log(e.key);
  console.log(e.key == 'p');

  // e.preventDefault();
}
signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);

// keyup
// keydown
// focus
// blur

// buttons are to be used for actions that happen inside of an applciation or website
// links are used to change the page, dont use links where buttons should be used.
// things that are not keyboard accessible should not have clicks registered on them

const photo = document.querySelector('.photo');

function handlePhotoClick(e) {
  if (e.type === 'click' || e.key === 'Enter') {
    console.log('you clicked the photo');
  }
}
photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);
