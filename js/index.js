window.addEventListener('load', function () {

});

function getScrollPercentage() {
  const scrolled = (window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
  return Math.min(100, Math.max(0, scrolled));
}


window.addEventListener('scroll', () => {
  const percentage = getScrollPercentage();
  const newValue = 301.6 - ((percentage / 100) * 301.6);

  const specificElement = document.getElementById('scrollProgress');
  specificElement.style.setProperty('--scroll-progress', newValue.toFixed(2));

  let button = document.getElementById('scrollBtnCtn');
  if (window.scrollY > 0) {
    button.classList.add('slideInBottom');
  } else {
    button.classList.remove('slideInBottom');
  }
});
function ScrollToTopButton() {
  console.log("Scroll Pressed");
  window.scrollTo({ top: 0, behavior: 'smooth' });
}



function submitForm(event) {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  const body = encodeURIComponent(
    `Name: ${firstName} ${lastName}
    Email: ${email}

    Message:
    ${message}`
  );

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;
  window.location.href = mailtoLink;
}




