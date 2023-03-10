const newBut = document.querySelector("#newButton");
const newCont = document.querySelector(".newContent");
const categoryApi = "https://";
const htmlApi = "https://";
const cssApi = "https://";
const csharpApi = "https://";
const javascriptApi = "https://";
const jqueryApi = "https://";
const pythonApi = "https://";
const sqlApi = "https://";
const dropdown = document.querySelector("#newSelect");
const inputNew = document.querySelector("#newInput");
const formNew = document.querySelector("#newForm");

async function getDataFromDetay() {
    const result = await fetch(categoryApi).then((res) => res.json());

    return result;
}
function createOpt(prod) {
    for (let i = 0; i < prod.length; i++) {
        const opti = document.createElement("option");
        opti.value = prod[i].categoryName;
        opti.className = "optionEle"
        opti.textContent = prod[i].categoryName;
        opti.id = prod[i].categoryId;
        dropdown.appendChild(opti);
    }
}
async function start() {
    const product = await getDataFromDetay();
    createOpt(product);
}
start();

newBut.addEventListener("click", () => {
    newCont.style.animation = "backInDown";
    newCont.style.animationDuration = ".4s";
    newCont.style.display = "block";
})

formNew.addEventListener("submit", (e) => {
    e.preventDefault();
    const selectValue = dropdown.value;
    let selectApi;
    if (selectValue === "JavaScript") {
        selectApi = javascriptApi;
    } else if (selectValue === "C#") {
        selectApi = csharpApi;
    } else if (selectValue === "HTML") {
        selectApi = htmlApi;
    } else if (selectValue === "CSS") {
        selectApi = cssApi;
    } else if (selectValue === "SQL") {
        selectApi = sqlApi;
    } else if (selectValue === "Python") {
        selectApi = pythonApi;
    } else if (selectValue === "JQuery") {
        selectApi = jqueryApi;
    }
    const nameData = {};
    const inputValue = inputNew.value;
    const allOptions = document.querySelectorAll("option");

    for (let item of allOptions) {
        if (item.value === selectValue) {
            nameData["Name"] = inputValue;
            fetch(selectApi, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(nameData),
            });
            break;
        }
    }
    
});



