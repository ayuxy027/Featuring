function showDesignCards() {
  var designCards = document.getElementById("design-cards");
  var marketingCards = document.getElementById("marketing-cards");
  var financeCards = document.getElementById("finance-cards");
  var musicCards = document.getElementById("music-cards");
  var educationCards = document.getElementById("education-cards");
  if (designCards.style.display === "none") {
    designCards.style.display = "block";
    marketingCards.style.display = "none";
    financeCards.style.display = "none";
    musicCards.style.display = "none";
    educationCards.style.display = "none";
  }
}

function showMarketingCards() {
  var designCards = document.getElementById("design-cards");
  var marketingCards = document.getElementById("marketing-cards");
  var financeCards = document.getElementById("finance-cards");
  var musicCards = document.getElementById("music-cards");
  var educationCards = document.getElementById("education-cards");
  if (
    marketingCards.style.display === "none" ||
    (marketingCards.style.display === "" &&
      designCards.style.display === "block")
  )
    marketingCards.style.display = "block";
  else marketingCards.style.display = "none";
}
