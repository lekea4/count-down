// Set the date we're counting down to
const countDownDate = new Date("April 6, 2021 06:00:00").getTime();

// Update the count down every 1 second
const x = setInterval(function () {

  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "Days " + hours + "Hours "
    + minutes + "Minutes " + seconds + "Second ";

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "CONGRATULATIONS ON YOUR NEW JOB TOOCHUKWU OBASI";
  }
}, 1000);