// Add some interactivity to the website
console.log("Hello, world!");

const swith = document.querySelector(".switch");

swith.addEventListener("click", e => {
    swith.classList.toggle("active");
    document.body.classList.toggle("active")
})