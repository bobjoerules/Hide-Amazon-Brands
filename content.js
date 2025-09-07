const defaultBrands = [
    "amazon basics",
    "solimo",
    "rivet",
    "happy belly",
    "mama bear",
    "goodthreads",
    "amazon essentials"
];

const api = (typeof browser !== "undefined") ? browser : chrome;
let blocked = 0
let blockedBrands = [];

api.storage.sync.get("blockedBrands")
  .then((data) => {
    blockedBrands = (Array.isArray(data.blockedBrands) && data.blockedBrands.length > 0)
      ? data.blockedBrands
      : defaultBrands;
    hideAmazonBrands();
  })
  .catch(console.error);

function hideAmazonBrands() {
  blocked = 0
  const items = document.querySelectorAll("span, div, a");
  items.forEach(el => {	
      if (el.innerText) {
          const text = el.innerText.toLowerCase();
          if (blockedBrands.some(brand => text.includes(brand.toLowerCase()))) {
            const product = el.closest("[data-asin], .s-result-item");
            if (product) {
              product.style.display = "none";
              blocked++
            }
          }
      }
  });
  api.storage.sync.set({ blocked: blocked })
        .then(() => console.log("Blocked Amount saved:", blocked))
        .catch(console.error);
}

const observer = new MutationObserver(hideAmazonBrands);
observer.observe(document.body, { childList: true, subtree: true });