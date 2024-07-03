function updateDateTime() {
  const currentTimeUTC = new Date().toISOString().split("T")[1].split(".")[0];
  const currentDay = new Date().toLocaleString("en-US", { weekday: "long" });

  document.querySelector(
    '[data-testid="currentTimeUTC"]'
  ).textContent = `Current Time (UTC): ${currentTimeUTC}`;
  document.querySelector(
    '[data-testid="currentDay"]'
  ).textContent = `Current Day: ${currentDay}`;
}

window.onload = function () {
  updateDateTime();
  setInterval(updateDateTime, 1000); // Update every second
};
