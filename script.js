const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const searchStatus = document.getElementById("searchStatus");

function updateSearchStatus() {
  const query = searchInput.value.trim();

  if (!query) {
    searchStatus.textContent = "Search status: waiting for input.";
    return;
  }

  searchStatus.textContent = `Search status: placeholder result for "${query}".`;
}

searchButton.addEventListener("click", updateSearchStatus);
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    updateSearchStatus();
  }
});
