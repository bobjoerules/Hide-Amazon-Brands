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

document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.getElementById("brands");
    const saveBtn = document.getElementById("save");
    const modeBtn = document.getElementById("mode");
    const toggleBtn = document.getElementById("toggle");
    const iconImg = document.getElementById("icon");
    let mode;

    api.storage.sync.get("blockedBrands")
        .then((data) => {
        let brands = (Array.isArray(data.blockedBrands) && data.blockedBrands.length > 0)
            ? data.blockedBrands
            : defaultBrands;
        textarea.value = brands.join("\n");
        })
        .catch(console.error);

    api.storage.sync.get("mode")
        .then((data) => {
        mode = data.mode || "darkmode";
        if (mode === "lightmode") {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            document.querySelector("textarea").style.backgroundColor = "white";
            document.querySelector("textarea").style.color = "black";
            iconImg.src = "icon.png";
            modeBtn.textContent = '🌙';
        } else {
            document.body.style.backgroundColor = "#222222";
            document.body.style.color = "white";
            document.querySelector("textarea").style.backgroundColor = "#333333";
            document.querySelector("textarea").style.color = "white";
            iconImg.src = "white-icon.png";
            modeBtn.textContent = '☀️';
        }
        })
        .catch(console.error);
    api.storage.sync.get("toggle")
    .then((data) => {
        toggle = data.toggle || "on";
        if (toggle === 'on') {
            toggleBtn.textContent = '👁️';
        }else {
            toggleBtn.textContent = '🚫';
        }
    })
    .catch(console.error);
    saveBtn.addEventListener("click", () => {
        const brands = textarea.value
        .split("\n")
        .map(b => b.trim())
        .filter(b => b.length > 0);

        api.storage.sync.set({ blockedBrands: brands })
        .then(() => api.tabs.query({ active: true, currentWindow: true }))
        .then((tabs) => {
            if (tabs[0]) {
            api.tabs.reload(tabs[0].id);
            }
            window.close();
        })
        .catch(console.error);
    });

    modeBtn.addEventListener("click", () => {
        if (mode === "darkmode") {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            document.querySelector("textarea").style.backgroundColor = "lightgrey";
            document.querySelector("textarea").style.color = "black";
            iconImg.src = "icon.png";
            mode = "lightmode";
            modeBtn.textContent = '🌙';
        } else {
            document.body.style.backgroundColor = "#222222";
            document.body.style.color = "white";
            document.querySelector("textarea").style.backgroundColor = "#333333";
            document.querySelector("textarea").style.color = "white";
            iconImg.src = "white-icon.png";
            mode = "darkmode";
            modeBtn.textContent = '☀️';
        }
        api.storage.sync.set({ mode: mode })
        .then(() => console.log("Mode saved:", mode))
        .catch(console.error);
    });
    toggleBtn.addEventListener("click", () => {
        if (toggle === 'on') {
            toggle = 'off'
            toggleBtn.textContent = '👁️';
        }else {
            toggle = 'on'
            toggleBtn.textContent = '🚫';
        }
        api.storage.sync.set({ toggle: toggle })
        .then(() => console.log("Toggle saved:", toggle))
        .catch(console.error)
        .then(() => api.tabs.query({ active: true, currentWindow: true }))
        .then((tabs) => {
            if (tabs[0]) {
                api.tabs.reload(tabs[0].id);
            }
            window.close();
        })
    });
});

function titleCase(str) {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   return splitStr.join(' '); 
}