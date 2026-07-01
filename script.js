const bookingForm = document.querySelector("#booking-form");
const sessionType = document.querySelector("#session-type");
const firstNameInput = document.querySelector("#first-name");
const goalInput = document.querySelector("#goal");
const result = document.querySelector("#booking-result");

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstName = firstNameInput.value.trim() || "Demande";
  const goal = goalInput.value.trim();
  const goalText = goal ? ` Objectif indiqué : ${goal}` : "";

  result.textContent = `${firstName}, ta demande pour "${sessionType.value}" est prête.${goalText} Contacte @levolutiontraining pour finaliser l'échange.`;
  bookingForm.reset();
});
