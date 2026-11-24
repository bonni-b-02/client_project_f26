const year = new Date().getFullYear();

document.querySelectorAll(".current_year").forEach(function(element) {
    element.textContent = year;
});