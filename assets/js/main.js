// const countdown = document.querySelector('.countdown');

// //set launch date (ms)
// const launchDate = new Date('Aug 12, 2020 22:00:00').getTime();

// // Update every second
// const intvl = setInterval(() => {

//     // get todays date and time (ms)
//     const now = new Date().getTime();

//     //distance from now to the launch date
//     const distance = launchDate - now;

//     // calculation for time
//     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const mins = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
//     const seconds = Math.floor((distance % (1000 * 60 )) / 1000 );

//   //  console.log(distance);

//     // Display result
//     countdown.innerHTML = `
//     <div class= 'ng'>${days}<span>Days</span></div>
//     <div>${hours}<span>Hours</span></div>
//     <div>${mins}<span>Mins</span></div>
//     <div>${seconds}<span>Secs</span></div>
//     `;

//     //if launch date passed
//     if(distance < 0) {
//     //stop countdown
//     clearInterval(intvl)
//     //style and output
//     countdown.style.color = '#17a2b8';
//     countdown.innerHTML = 'Launched!';
//     }
// },1000);
