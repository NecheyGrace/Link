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

function setImageNaturalDimensions() {
  const image = document.querySelector('[data-testid="slackProfilePicture"]');
  image.onload = function () {
    image.width = image.naturalWidth;
    image.height = image.naturalHeight;
  };
}

window.onload = function () {
  updateDateTime();
  setImageNaturalDimensions();
  setInterval(updateDateTime, 1000); // Update every second
};
