document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("output");

  // Mock data
  const advice = {
    stylist: "BraidsByZee",
    tip: "Always detangle before blow-drying!",
    rating: 4.8
  };

  // Simulate API response
  setTimeout(() => {
    output.innerHTML = `
      <h2>${advice.stylist}</h2>
      <p>${advice.tip}</p>
      <strong>Rating: ${advice.rating}</strong>
    `;
  }, 500);
});