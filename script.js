const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const clearButton = document.getElementById("clearButton");
const searchStatus = document.getElementById("searchStatus");
const navList = document.getElementById("navList");
const sectionList = document.getElementById("sectionList");
const featuredGrid = document.getElementById("featuredGrid");
const searchMatches = document.getElementById("searchMatches");
const forumBoards = document.getElementById("forumBoards");

const navNames = ["Forum Home", "Characters", "Map Talk", "Vehicles"];
const navLinks = ["index.html", "#characters", "#map", "#vehicles"];

const sectionNames = ["Story", "Leaks", "Locations", "Media"];
const sectionLinks = ["#story", "leaks.html", "#locations", "media.html"];

const cardTitles = ["128 Members Online", "42 New Posts", "7 Hot Topics"];
const cardTexts = [
  "Live users reading and replying right now.",
  "Fresh forum activity from the last 24 hours.",
  "Threads currently getting the most replies."
];
const cardLinks = ["#characters", "#map", "media.html"];

const boardTitles = ["General Discussion", "Characters and Story", "Map and Locations", "Leaks and Rumors"];
const boardTexts = [
  "General GTA 6 talk, first impressions and community questions.",
  "Post theories about protagonists, side characters and story details.",
  "Discuss Vice City, Leonida and world design.",
  "Talk about rumors, insider posts and unconfirmed information."
];
const boardPosts = ["231 posts", "86 posts", "119 posts", "54 posts"];
const boardThreads = ["18 threads", "9 threads", "12 threads", "6 threads"];

const topics = ["Jason and Lucia", "Vice City", "Leonida", "Leaks", "Trailers", "Screenshots"];
const topicTypes = ["Characters", "Map", "Locations", "Story", "Media", "Media"];

function showNavigation() {
  let text = "";

  for (let i = 0; i < navNames.length; i = i + 1) {
    text = text + '<li><a href="' + navLinks[i] + '">' + navNames[i] + "</a></li>";
  }

  navList.innerHTML = text;
}

function showSections() {
  let text = "";

  for (let i = 0; i < sectionNames.length; i = i + 1) {
    text = text + '<li><a href="' + sectionLinks[i] + '">' + sectionNames[i] + "</a></li>";
  }

  sectionList.innerHTML = text;
}

function showCards() {
  let text = "";

  for (let i = 0; i < cardTitles.length; i = i + 1) {
    text =
      text +
      '<a class="card stat-card" href="' +
      cardLinks[i] +
      '"><h3>' +
      cardTitles[i] +
      "</h3><p>" +
      cardTexts[i] +
      "</p></a>";
  }

  featuredGrid.className = "grid-inner";
  featuredGrid.innerHTML = text;
}

function showBoards() {
  let text = "";

  for (let i = 0; i < boardTitles.length; i = i + 1) {
    text =
      text +
      '<div class="board-row">' +
      '<div class="board-main">' +
      "<h4>" +
      boardTitles[i] +
      "</h4>" +
      "<p>" +
      boardTexts[i] +
      "</p>" +
      "</div>" +
      '<div class="board-meta">' +
      "<strong>" +
      boardThreads[i] +
      "</strong>" +
      "<span>" +
      boardPosts[i] +
      "</span>" +
      "</div>" +
      "</div>";
  }

  forumBoards.innerHTML = text;
}

function searchTopics() {
  const userText = searchInput.value.toLowerCase().trim();
  let resultText = "";
  let matches = 0;

  if (userText === "") {
    searchStatus.textContent = "Search status: write something first.";
    searchMatches.innerHTML = "";
    return;
  }

  for (let i = 0; i < topics.length; i = i + 1) {
    if (topics[i].toLowerCase().includes(userText) || topicTypes[i].toLowerCase().includes(userText)) {
      resultText =
        resultText +
        "<li><strong>" +
        topics[i] +
        "</strong><span>" +
        topicTypes[i] +
        "</span></li>";
      matches = matches + 1;
    }
  }

  if (matches === 0) {
    searchStatus.textContent = 'Search status: no match for "' + searchInput.value + '".';
    searchMatches.innerHTML = "";
  } else {
    searchStatus.textContent = "Search status: found " + matches + " match(es).";
    searchMatches.innerHTML = resultText;
  }
}
//Vars and functions 
showNavigation();
showSections();
showCards();
showBoards();

searchButton.addEventListener("click", searchTopics);
searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    searchTopics();
  }
});

clearButton.addEventListener("click", function () {
  searchInput.value = "";
  searchStatus.textContent = "Search status: cleared.";
  searchMatches.innerHTML = "";
});
