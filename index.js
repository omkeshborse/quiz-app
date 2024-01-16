const correctAnswer = ["D", "B", "C", "B"];
const form = document.querySelector(".quiz-form");

const result = document.querySelector(".result");
const questions = document.querySelectorAll(".question");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;
  const userAnswer = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
     ];
console.log(userAnswer);
  userAnswer.forEach((ans, index) => {
    if (ans === correctAnswer[index]) {
      score++;
      questions[index].classList.add("correct");
    } else {
      questions[index].classList.add("wrong");
    }
  });

  scrollTo(0, 0);
  result.classList.remove("hide");
  result.querySelector(
    "p"
  ).textContent = `You scored ${score}/${userAnswer.length} `;
});
