const countEl = document.querySelectorAll('.counta');

// Set the date we're counting down to
var countDownDate = new Date('Jul 7, 2021 15:37:25').getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  //   document.getElementById('demo').innerHTML =
  //     days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
  countEl[0].children[0].innerHTML = days;
  countEl[1].children[0].innerHTML = hours;
  countEl[2].children[0].innerHTML = minutes;
  countEl[3].children[0].innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    // document.getElementById('demo').innerHTML = 'EXPIRED';
  }
}, 1000);

const harm = document.querySelector('nav > span');
const side = document.querySelector('.sidemenu');
const times = document.querySelector('.times');
const menus = document.querySelectorAll('.secmenu');
const mainMenus = document.querySelectorAll('nav ul li');

const home = document.querySelector('.started');
const about = document.querySelector('.how');
// const mentors = document.querySelector('.curriculum > div:nth-child(3)');
// const contact = document.querySelector('.cont > div:nth-child(2)');

const remove = () => {
  side.style.left = '100vw';
};

const scrollList = (el) => {
  el.addEventListener('click', (e) => {
    switch (e.target.innerText) {
      case 'Home':
        remove();
        home.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'About':
        remove();
        about.scrollIntoView({ behavior: 'smooth' });
        break;
      // case 'Mentors':
      //   remove();
      //   mentors.scrollIntoView({ behavior: 'smooth' });
      //   break;
      // case 'Contact':
      //   remove();
      //   contact.scrollIntoView({ behavior: 'smooth' });
      //   break;
      default:
        break;
    }
  });
};

harm.addEventListener('click', () => {
  side.style.left = '15%';
});

times.addEventListener('click', () => {
  remove();
});

document.addEventListener('click', ({ target }) => {
  if (!target.closest('.sidemenu,.menualt')) {
    remove();
  }
});

menus.forEach(scrollList);
mainMenus.forEach(scrollList);

new WOW().init();
