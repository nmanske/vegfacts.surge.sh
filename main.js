$(document).ready(function() {
  function displayFact(fact) {
    $("#fact").text(fact);
  }
  $("#health-btn").click(function() {
    displayFact("Plants are good for you!")
  });
  $("#environment-btn").click(function() {
    displayFact("Save the trees!")
  });
  $("#ethics-btn").click(function() {
    displayFact("Animals are cute!")
  });
});
