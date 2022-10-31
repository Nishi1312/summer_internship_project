const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  counter.innerText = "0";
  function updatecounter() {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;
    const increment = target / 200;
    // console.log(increment);
    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updatecounter, 2);
    } else {
      counter.innerText = target;
    }
  }
  updatecounter();
});

const btn1 = document.querySelector("#btn-1");
const text1 = document.querySelector(".show-1");
btn1.addEventListener("click", button);
function button() {
  text1.classList.toggle("hide-1");

  btn1.textContent == "Read More"
    ? (btn1.textContent = "Read Less")
    : (btn1.textContent = "Read More");
}

const btn2 = document.querySelector("#btn-2");
const text2 = document.querySelector(".show-2");

function Button() {
  text2.classList.toggle("hide-2");

  btn2.textContent == "Read More"
    ? (btn2.textContent = "Read Less")
    : (btn2.textContent = "Read More");
}
btn2.addEventListener("click", Button);

var date = new Date();
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// document.getElementById("month").innerHTML = monthNames[date.getMonth()];
// document.getElementById("date").innerHTML = date.getDate();
// document.getElementById("year").innerHTML = date.getFullYear();
document.querySelectorAll("article p span.month").innerHTML =
  monthNames[date.getMonth()];
document.querySelectorAll("article p span.date").innerHTML = date.getDate();
document.querySelectorAll("article p span.year").innerHTML = date.getFullYear();

// document.getElementById("month1").innerHTML = monthNames[date.getMonth()];
// document.getElementById("date1").innerHTML = date.getDate();
// document.getElementById("year1").innerHTML = date.getFullYear();
