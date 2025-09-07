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
    const items = document.querySelectorAll("span, div, a");
    items.forEach(el => {	
        if (el.innerText) {
            const text = el.innerText.toLowerCase();
            if (blockedBrands.some(brand => text.includes(brand.toLowerCase()))) {
                const product = el.closest("[data-asin], .s-result-item");
                if (product) {
                    product.style.display = "none";
                }
            }
        }
    });
}

const observer = new MutationObserver(hideAmazonBrands);
observer.observe(document.body, { childList: true, subtree: true });