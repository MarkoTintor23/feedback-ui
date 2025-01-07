const smileys = document.querySelectorAll(".rating");
const sendBtn = document.querySelector(".send-review");
const thanks = document.querySelector("#thank-you");
const container = document.querySelector(".container");
const feedback = document.querySelector("#selected-feedback");

smileys.forEach(function (smiley) {
  smiley.addEventListener("click", function () {
    smileys.forEach(function (s) {
      s.classList.remove("active");
    });
    this.classList.add("active");
  });
});

sendBtn.addEventListener("click", function () {
  const activeSmiley = document.querySelector(".rating.active");
  if (activeSmiley) {
    thanks.classList.remove("hidden");
    container.classList.add("hidden");

    const selectedFeedback = activeSmiley.dataset.feedback;
    feedback.textContent = `Feedback: ${selectedFeedback}`;
  } else {
    alert("You have to pick something");
  }
});
