let buttons = document.querySelectorAll(".actionButton");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (button.innerHTML == "-") {
      button.innerHTML = "+";
    } else {
      button.innerHTML = "-";
    }
    let nextEl = button.parentElement.nextElementSibling;
    while (nextEl) {
      nextEl.classList.toggle("hide");
      nextEl = nextEl.nextElementSibling;
    }
  });
});
