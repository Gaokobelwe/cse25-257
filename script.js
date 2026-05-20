console.log("JavaScript is connected!");

// 🔥 GET HTML ELEMENTS
const searchBar = document.getElementById("searchBar");
const searchBtn = document.getElementById("searchBtn");

// 🔥  PAGE DATA
const pages = [
  { title: "Home", url: "index.html", keywords: "home welcome main" },
  { title: "Properties", url: "properties.html", keywords: "house property apartment comercial buildings" },
  { title: "Blog", url: "blog.html", keywords: "news tips real estate blog" },
  { title: "About Us", url: "about.html", keywords: "about company info ceo" },
  { title: "Contact", url: "contacts.html", keywords: "contact phone email help faq location" }
];

// 🔥 SEARCH FUNCTION
function performSearch() {
  const query = searchBar.value.trim().toLowerCase();

  if (!query) {
    alert("Please enter a search term.");
    return;
  }

  const result = pages.find(page =>
    page.keywords.includes(query) || page.title.toLowerCase().includes(query)
  );

  if (result) {
    window.location.href = result.url;
  } else {
    alert("No results found.");
  }
}

// 🔥 EVENT LISTENERS (THIS WAS MISSING)
if (searchBtn && searchBar) {
  searchBtn.addEventListener("click", performSearch);

  searchBar.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      performSearch();
    }
  });
}