window.onload = (event) => {
  var disclaimerContainer = document.getElementById("disclaimer-container");
  let isDisclaimerAgreed = localStorage.getItem("disclaimerAgreed");
  disclaimerContainer.style.display = "flex";
  // if (isDisclaimerAgreed) {
  //   disclaimerContainer.style.display = "none";
  // } else {
  //   disclaimerContainer.style.display = "flex";
  // }
};
function handleDisclaimerClick() {
  var disclaimerContainer = document.getElementById("disclaimer-container");
  localStorage.setItem("disclaimerAgreed", true);
  disclaimerContainer.style.display = "none";
}
