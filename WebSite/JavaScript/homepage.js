const userName = document.querySelector(".userName");
userName.textContent = localStorage.getItem("name");
const logButton = document.querySelector("#logButton");
const rightCont = document.querySelector(".rightPanelContent");
const rightTab = document.querySelector(".rightPanelTab");
const userAge = document.querySelector("#yasListe");
const subMenu = document.querySelectorAll(".sub-menu");
const homePage = document.querySelector("#home");


if(userName.textContent !== "") {
    logButton.textContent = "Çıkış Yap";
} else {
    userName.textContent = "Merhabalar!";
    logButton.textContent = "Giriş / Kayıt";
}

logButton.addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "/WebSite/Html/login.html";
})
function sidebar() {
    let arrow = document.querySelectorAll(".arrow");
    for (var i = 0; i < arrow.length; i++) {
        arrow[i].addEventListener("click", (e) => {
            let arrowParent = e.target.parentElement.parentElement;
            arrowParent.classList.toggle("showMenu");
        });
    }
};

sidebar();

function createTabItem(e) {
    for (let i = 0; i < rightTab.childElementCount; i++) {
        if (rightTab.children[i].children[0].textContent === e) {
            return;
        }
    }
    let rightPanelTabItems = document.querySelectorAll(".underTabItems");
    const tabSpanItem = document.createElement("span");
    tabSpanItem.className = "underTabItems";
    const tabButtonItem = document.createElement("button");
    tabButtonItem.className = "tabButtons";
    tabButtonItem.type = "submit";
    tabButtonItem.textContent = e;
    if (rightPanelTabItems.length === 0) {
        tabButtonItem.id = "button0"
    }
    else {
        for (let k = 1; k <= rightPanelTabItems.length; k++) {
            tabButtonItem.id = "button" + k;
        }
    }
    tabButtonItem.onclick = function openButton() {
        const allIframe = document.querySelectorAll(".iframeItem");
        const buttonId = this.id.slice(this.id.indexOf("n") + 1);
        for (let k = 0; k < allIframe.length; k++) {
            if (allIframe[k].style.display === "block") {
                allIframe[k].style.display = "none";
                break;
            }
        }
        for (let i = 0; i < allIframe.length; i++) {
            if (buttonId === allIframe[i].id.slice(allIframe[i].id.indexOf("r") + 1)) {
                allIframe[i].style.display = "block"
            }
        }

    }
    const tabIconItem = document.createElement("i");
    tabIconItem.className = "bx bx-message-square-x";
    if (rightPanelTabItems.length === 0) {
        tabIconItem.id = "icon0"
    }
    else {
        for (let k = 1; k <= rightPanelTabItems.length; k++) {
            tabIconItem.id = "icon" + k;
        }
    }
    tabIconItem.onclick = function closeTab() {
        let iframeParent = document.querySelector(".rightPanelContent");
        this.parentElement.remove();
        const iconId = this.id.slice(this.id.indexOf("n") + 1);
        if(iframeParent.childElementCount === 1) {
            iframeParent.children[0].remove();
            window.location.href = "/WebSite/Html/homepage.html";
            return;
        }
        for(let k = 0; k < iframeParent.childElementCount; k++) {
            if(iframeParent.children[k].id === "ifr" + iconId) {
                if(iframeParent.children[k].style.display === "block" && k !== iframeParent.childElementCount - 1) {
                    iframeParent.children[iframeParent.childElementCount-1].style.display = "block";
                }
                if(iframeParent.children[k].style.display === "block" && k === iframeParent.childElementCount - 1) {
                    iframeParent.children[iframeParent.childElementCount-2].style.display = "block";
                }
                iframeParent.children[k].remove();
                break;
            }
        }
    }
    tabSpanItem.appendChild(tabButtonItem);
    tabSpanItem.appendChild(tabIconItem);
    rightTab.appendChild(tabSpanItem);
}

function createIframe(name) {
    const allIframe = document.querySelectorAll(".iframeItem");
    const ifr = document.createElement("iframe");
    ifr.src = "/WebSite/Html/Kategoriler/" + name + ".html";
    ifr.className = "iframeItem";
    ifr.style.display = "block";
    if (allIframe.length === 0) {
        ifr.id = "ifr0";
    } else {
        ifr.id = "ifr" + String(allIframe.length);
    }
    rightCont.appendChild(ifr);

}

function createTab(name, header) {
    const allIframe = document.querySelectorAll(".iframeItem");
    if (allIframe.length === 0) {
        createTabItem(header);
        const ifr = document.createElement("iframe");
        ifr.src = "/WebSite/Html/Kategoriler/" + name + ".html";
        ifr.className = "iframeItem";
        ifr.style.display = "block";
        if (allIframe.length === 0) {
            ifr.id = "ifr0";
        } else {
            ifr.id = "ifr" + String(allIframe.length);
        }
        rightCont.appendChild(ifr);
    }
    if (homePage.hasChildNodes()) {
        while (homePage.hasChildNodes()) {
            homePage.removeChild(homePage.firstChild);
        }
    }
    let item;
    for (let i = 0; i < allIframe.length; i++) {
        if (allIframe[i].style.display === "block") {
            item = allIframe[i];
            break;
        }
    }
    for (let i = 0; i < allIframe.length; i++) {
        if (allIframe[i].src.slice(allIframe[i].src.indexOf("ler/") + 4, allIframe[i].src.length - 5) === name) {
            item.style.display = "none";
            allIframe[i].style.display = "block";
            return;
        }
    }
    for (let i = 0; i < allIframe.length; i++) {
        if (allIframe[i].style.display === "block") {
            allIframe[i].style.display = "none";
            createTabItem(header);
            createIframe(name);
            break;
        }
    }
}