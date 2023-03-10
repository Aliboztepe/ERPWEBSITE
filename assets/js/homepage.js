const userName = document.querySelector("#user-name");
const api = "https://";
const htmlApi = "https://";
const cssApi = "https://";
const csharpApi = "https://";
const javascriptApi = "https://";
const jqueryApi = "https://";
const pythonApi = "https://";
const sqlApi = "https://";
userName.textContent = localStorage.getItem("name");
const logButton = document.querySelector("#sign-out");
const rightCont = document.querySelector("#rightPanelContent");
const rightTab = document.querySelector("#rightPanelTab");
const homePage = document.querySelector("#home");
const javascriptSubMenu = document.querySelector("#JavaScript");
const csharpSubMenu = document.querySelector("#Csharp");
const htmlSubMenu = document.querySelector("#HTML");
const cssSubMenu = document.querySelector("#CSS");
const sqlSubMenu = document.querySelector("#SQL");
const pythonSubMenu = document.querySelector("#Python");
const jquerySubMenu = document.querySelector("#JQuery");
const pastTabs = document.querySelector("#past-tabs");
const popUp = document.querySelector("#pop-up-card");
const cleanButton = document.querySelector("#clean-button");


async function getDataFromHtml() {
  const htmlData = await fetch(htmlApi).then((res) => res.json());
  return htmlData;
}

async function getDataFromCss() {
  const cssData = await fetch(cssApi).then((res) => res.json());
  return cssData;
}

async function getDataFromCsharp() {
  const csharpData = await fetch(csharpApi).then((res) => res.json());
  return csharpData;
}

async function getDataFromJavaScript() {
  const javascriptData = await fetch(javascriptApi).then((res) => res.json());
  return javascriptData;
}

async function getDataFromJquery() {
  const dataJquery = await fetch(jqueryApi).then((res) => res.json());
  return dataJquery;
}

async function getDataFromPython() {
  const dataPython = await fetch(pythonApi).then((res) => res.json());
  return dataPython;
}

async function getDataFromSql() {
  const dataSql = await fetch(sqlApi).then((res) => res.json());
  return dataSql;
}

const subMenuHtml = (product) => {
  for (let item of product) {
    const liElement = document.createElement("li");
    const aElement = document.createElement("a");
    liElement.className = "nav-item";
    aElement.className = "nav-link";
    aElement.href = `javascript:createTab("html/html${
      htmlSubMenu.childElementCount + 1
    }", "${item.name}")`;
    aElement.textContent = item.name;
    liElement.appendChild(aElement);
    htmlSubMenu.appendChild(liElement);
  }
};

const subMenuCss = (product) => {
  for (let item of product) {
    const liElement = document.createElement("li");
    const aElement = document.createElement("a");
    liElement.className = "nav-item";
    aElement.className = "nav-link";
    aElement.href = `javascript:createTab("css/css${
      cssSubMenu.childElementCount + 1
    }", "${item.name}")`;
    aElement.textContent = item.name;
    liElement.appendChild(aElement);
    cssSubMenu.appendChild(liElement);
  }
};

const subMenuCsharp = (product) => {
  for (let item of product) {
    const liElement = document.createElement("li");
    const aElement = document.createElement("a");
    liElement.className = "nav-item";
    aElement.className = "nav-link";
    aElement.href = `javascript:createTab("csharp/csharp${
      csharpSubMenu.childElementCount + 1
    }", "${item.name}")`;
    aElement.textContent = item.name;
    liElement.appendChild(aElement);
    csharpSubMenu.appendChild(liElement);
  }
};

const subMenuJavaScript = (product) => {
  for (let item of product) {
    const liElement = document.createElement("li");
    const aElement = document.createElement("a");
    liElement.className = "nav-item";
    aElement.className = "nav-link";
    aElement.href = `javascript:createTab("javascript/javascript${
      javascriptSubMenu.childElementCount + 1
    }", "${item.name}")`;
    aElement.textContent = item.name;
    liElement.appendChild(aElement);
    javascriptSubMenu.appendChild(liElement);
  }
};

const subMenuJquery = (product) => {
  for (let item of product) {
    const liElement = document.createElement("li");
    const aElement = document.createElement("a");
    liElement.className = "nav-item";
    aElement.className = "nav-link";
    aElement.href = `javascript:createTab("jquery/jquery${
      jquerySubMenu.childElementCount + 1
    }", "${item.name}")`;
    aElement.textContent = item.name;
    liElement.appendChild(aElement);
    jquerySubMenu.appendChild(liElement);
  }
};

const subMenuPython = (product) => {
  for (let item of product) {
    const liElement = document.createElement("li");
    const aElement = document.createElement("a");
    liElement.className = "nav-item";
    aElement.className = "nav-link";
    aElement.href = `javascript:createTab("python/python${
      pythonSubMenu.childElementCount + 1
    }", "${item.name}")`;
    aElement.textContent = item.name;
    liElement.appendChild(aElement);
    pythonSubMenu.appendChild(liElement);
  }
};

const subMenuSql = (product) => {
  for (let item of product) {
    const liElement = document.createElement("li");
    const aElement = document.createElement("a");
    liElement.className = "nav-item";
    aElement.className = "nav-link";
    aElement.href = `javascript:createTab("sql/sql${
      sqlSubMenu.childElementCount + 1
    }", "${item.name}")`;
    aElement.textContent = item.name;
    liElement.appendChild(aElement);
    sqlSubMenu.appendChild(liElement);
  }
};

const subMenuCreate = async () => {
  const htmlProduct = await getDataFromHtml();
  const cssProduct = await getDataFromCss();
  const csharpProduct = await getDataFromCsharp();
  const javascriptProduct = await getDataFromJavaScript();
  const jqueryProduct = await getDataFromJquery();
  const pythonProduct = await getDataFromPython();
  const sqlProduct = await getDataFromSql();
  subMenuHtml(htmlProduct);
  subMenuCss(cssProduct);
  subMenuCsharp(csharpProduct);
  subMenuJavaScript(javascriptProduct);
  subMenuJquery(jqueryProduct);
  subMenuPython(pythonProduct);
  subMenuSql(sqlProduct);
};

subMenuCreate();

if (userName.textContent !== "") {
  logButton.textContent = "Çıkış Yap";
} else {
  userName.textContent = "Merhabalar!";
  logButton.textContent = "Giriş / Kayıt";
}

logButton.addEventListener("click", () => {
  localStorage.clear();
});

function closeTab() {
  let iframeParent = document.querySelector("#rightPanelContent");
  this.parentElement.remove();

  const iconId = this.id.slice(this.id.indexOf("n") + 1);
  if (iframeParent.childElementCount === 1) {
    iframeParent.children[0].remove();
    window.location.href = "index.html";
    return;
  }
  for (let k = 0; k < iframeParent.childElementCount; k++) {
    if (iframeParent.children[k].id === "ifr" + iconId) {
      if (
        iframeParent.children[k].style.display === "block" &&
        k !== iframeParent.childElementCount - 1
      ) {
        iframeParent.children[
          iframeParent.childElementCount - 1
        ].style.display = "block";
      }
      if (
        iframeParent.children[k].style.display === "block" &&
        k === iframeParent.childElementCount - 1
      ) {
        iframeParent.children[
          iframeParent.childElementCount - 2
        ].style.display = "block";
      }
      iframeParent.children[k].remove();
      break;
    }
  }
}

function openTab() {
  const allIframe = document.querySelectorAll(".iframeItem");
  const itemId = this.id.slice(this.id.indexOf("m") + 1);
  for (let k = 0; k < allIframe.length; k++) {
    if (allIframe[k].style.display === "block") {
      allIframe[k].style.display = "none";
      break;
    }
  }
  for (let i = 0; i < allIframe.length; i++) {
    if (itemId === allIframe[i].id.slice(allIframe[i].id.indexOf("r") + 1)) {
      allIframe[i].style.display = "block";
    }
  }
}


const openIfr = () => {
  const allIframe = document.querySelectorAll(".iframeItem");
  const itemId = this.id.slice(this.id.indexOf("t") + 1);
  for (let k = 0; k < allIframe.length; k++) {
    if (allIframe[k].style.display === "block") {
      allIframe[k].style.display = "none";
      break;
    }
  }
  for (let i = 0; i < allIframe.length; i++) {
    if (itemId === allIframe[i].id.slice(allIframe[i].id.indexOf("r") + 1)) {
      allIframe[i].style.display = "block";
    }
  }
  popUp.style.visibility = "hidden";
} 

const createPopUpItem = (e) => {
  const popUpElement = document.querySelector(".pop-up");
  for (let i = 0; i < popUpElement.childElementCount; i++) {
    if (popUpElement.children[i].children[0].textContent === e) {
      return;
    }
  }
  const popLiItem = document.createElement("li");
  popLiItem.className = "pop-up-item";
  const popButton = document.createElement("button");
  popButton.className = "btn btn-gradient-secondary";
  popButton.textContent = e;
  const popUpEl = document.querySelectorAll(".pop-up-item");
  if (popUpEl.length === 0) {
    popButton.id = "popBut0";
  } else {
    for (let k = 1; k <= popUpEl.length; k++) {
      popButton.id = "popBut" + k;
    }
  }
  popButton.onclick = function openIfr() {
    const allIframe = document.querySelectorAll(".iframeItem");
    const itemId = this.id.slice(this.id.indexOf("t") + 1);
    for (let k = 0; k < allIframe.length; k++) {
      if (allIframe[k].style.display === "block") {
        allIframe[k].style.display = "none";
        break;
      }
    }
    for (let i = 0; i < allIframe.length; i++) {
      if (itemId === allIframe[i].id.slice(allIframe[i].id.indexOf("r") + 1)) {
        allIframe[i].style.display = "block";
      }
    }
    popUp.style.visibility = "hidden";
  } 
  popLiItem.appendChild(popButton);
  popUpElement.appendChild(popLiItem);
}

function createTabItem(e) {
  for (let i = 0; i < rightTab.childElementCount; i++) {
    if (rightTab.children[i].children[0].textContent === e) {
      return;
    }
  }
  const tabLiItem = document.createElement("li");
  tabLiItem.className = "tab-item";
  let rightPanelTabItems = document.querySelectorAll(".tab-item");
  const tabSpanItem = document.createElement("span");
  tabSpanItem.className = "tab-text";
  tabSpanItem.textContent = e;
  if (rightPanelTabItems.length === 0) {
    tabSpanItem.id = "item0";
  } else {
    for (let k = 1; k <= rightPanelTabItems.length; k++) {
      tabSpanItem.id = "item" + k;
    }
  }
  tabSpanItem.onclick = openTab;
  const tabIconItem = document.createElement("i");
  tabIconItem.className = "mdi mdi-window-close tab-icon";
  if (rightPanelTabItems.length === 0) {
    tabIconItem.id = "icon0";
  } else {
    for (let k = 1; k <= rightPanelTabItems.length; k++) {
      tabIconItem.id = "icon" + k;
    }
  }
  tabIconItem.onclick = closeTab;
  tabLiItem.appendChild(tabSpanItem);
  tabLiItem.appendChild(tabIconItem);
  rightTab.appendChild(tabLiItem);
}

function createIframe(name) {
  const allIframe = document.querySelectorAll(".iframeItem");
  const ifr = document.createElement("iframe");
  ifr.src = "/pages/" + name + ".html";
  ifr.className = "iframeItem";
  ifr.style.animation = "backInUp";
  ifr.style.animationDuration = "1s";
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
    createPopUpItem(header);
    const ifr = document.createElement("iframe");
    ifr.style.animation = "backInUp";
    ifr.style.animationDuration = "1s";
    ifr.src = "/pages/" + name + ".html";
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
    if (
      allIframe[i].src.slice(
        allIframe[i].src.indexOf("ges/") + 4,
        allIframe[i].src.length - 5
      ) === name
    ) {
      item.style.display = "none";
      allIframe[i].style.display = "block";
      return;
    }
  }

  for (let i = 0; i < allIframe.length; i++) {
    if (allIframe[i].style.display === "block") {
      allIframe[i].style.display = "none";
      createTabItem(header);
      createPopUpItem(header);
      createIframe(name);
      break;
    }
  }
}

pastTabs.addEventListener("click", () => {
  if(popUp.style.visibility === "hidden") {
    popUp.style.visibility = "visible";
  } else {
    popUp.style.visibility = "hidden";
  }
  
});

cleanButton.addEventListener("click", () => {
  const popUpList = document.querySelector(".pop-up");
  console.log(popUpList)
  if (popUpList.hasChildNodes()) {
    while (popUpList.hasChildNodes()) {
      popUpList.removeChild(popUpList.firstChild);
    }
  }
  popUp.style.visibility = 'hidden';
})