// navbar codes
var navToggler = document.querySelector(".nav-toggle");
var navLinks = document.querySelector(".nav-links");

navToggler.addEventListener("click", function () {
    navLinks.classList.toggle("show-links");

});


// time codes
var day = document.querySelector("#day");
var time = document.querySelector("#time");

//time code
setInterval(() => {
    const today = new Date();
    const currentTime = today.toUTCString().slice(17, 25);
    time.textContent = `Time(UTC): ${currentTime}`;
}, 100);

// day code
var date = new Date();
var currentDay = date.getDay();

var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

day.textContent = `Day: ${days[currentDay]}`;