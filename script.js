class Feedback {
  constructor() {
    this.smileys = document.querySelectorAll(".rating");
    this.sendBtn = document.querySelector(".send-review");
    this.thanks = document.querySelector("#thank-you");
    this.container = document.querySelector(".container");
    this.feedback = document.querySelector("#selected-feedback");

    this.addEventListeners();
  }

  addEventListeners() {
    this.smileys.forEach((smiley) => {
      smiley.addEventListener("click", (e) => this.smileyHandler(e));
    });
    this.sendBtn.addEventListener("click", () => this.sendHandler());
  }

  smileyHandler(event) {
    this.smileys.forEach((s) => s.classList.remove("active"));
    event.target.classList.add("active");
  }

  sendHandler() {
    const activeSmiley = document.querySelector(".rating.active");
    if (activeSmiley) {
      this.thanks.classList.remove("hidden");
      this.container.classList.add("hidden");

      const selectedFeedback = activeSmiley.dataset.feedback;
      this.feedback.textContent = `Feedback: ${selectedFeedback}`;
    } else {
      alert("You have to pick something");
    }
  }
}

const smajli = new Feedback();
