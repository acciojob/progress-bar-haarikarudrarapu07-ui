//your JS code here. If required.
const circles = document.querySelectorAll(".circle");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const progress = document.getElementById("progress");

let current = 1;

next.addEventListener("click", function () {

    if (current < circles.length) {
        current++;

        circles[current - 1].classList.add("active");

        progress.style.width =
            ((current - 1) / (circles.length - 1)) * 100 + "%";

        prev.disabled = false;

        if (current === circles.length) {
            next.disabled = true;
        }
    }
});


prev.addEventListener("click", function () {

    if (current > 1) {
        circles[current - 1].classList.remove("active");

        current--;

        progress.style.width =
            ((current - 1) / (circles.length - 1)) * 100 + "%";

        next.disabled = false;

        if (current === 1) {
            prev.disabled = true;
        }
    }
});