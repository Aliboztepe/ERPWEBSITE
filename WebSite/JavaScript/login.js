const signUpButton = document.getElementById('signUp');
const api = "";
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const loginForm = document.querySelector("#loginForm");
const signupForm = document.querySelector("#signupForm");

async function getDatafromApi() {
    const result = await fetch(api).then((res) => res.json());

    return result;
}

async function controlData(ema, pass) {
    const products = await getDatafromApi();
    for (let i = 0; i < products.length; i++) {
        if (products[i].email === ema && products[i].password === pass) return products[i].name;
    }
    return false;
}

async function controlEmail(em) {
    const products = await getDatafromApi();
    for (let i = 0; i < products.length; i++) {
        if (products[i].email === em) return true;
    }
    return false;
}

async function sendName() {
    const products = await getDatafromApi();

}

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const logEmail = document.getElementById("loginEmail").value;
    const logPassword = document.getElementById("loginPassword").value;
    const result = await controlData(logEmail, logPassword);
    const res = validateFormLogin();
    if (res) {
        if (result !== false) {
            localStorage.setItem("name",result);
            window.location.href = '/WebSite/Html/homepage.html';
        } else {
            alert("Hatalı Email/Şifre girdiniz. Yeniden deneyin.");
        }

    }
});
signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const signEma = document.getElementById("signEmail").value;
    const data = await controlEmail(signEma);
    const result = validateFormSignup();
    if (result) {
        if (data) {
            alert("Email adresi sistemde kayıtlıdır.");
        } else {
            const formData = new FormData(signupForm);
            const element = Object.fromEntries(formData);
            fetch(api, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(element),
            });
            alert("Başarıyla kayıt oldunuz.");
            container.classList.remove("right-panel-active");
        }
    }
});

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});


function validateFormLogin() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email == "") {
        alert("Email alanı boş bırakılamaz.");
        return false;
    }
    if (!email.match(emailRegex)) {
        alert("Lütfen uygun bir Email adresi giriniz.");
        return false;
    }
    if (password == "") {
        alert("Şifre alanı boş bırakılamaz.");
        return false;
    }
    return true;
}

function validateFormSignup() {
    const name = document.querySelector("#signName").value;
    const email = document.querySelector("#signEmail").value;
    const password = document.querySelector("#signPassword").value;
    const age = document.querySelector("#signAge").value;
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (name == "") {
        alert("Ad alanı boş bırakılamaz.");
        return false;
    }
    if (age == "") {
        alert("Yaş alanı boş bırakılamaz.");
        return false;
    }
    if (email == "") {
        alert("Email alanı boş bırakılamaz.");
        return false;
    }
    if (!email.match(emailRegex)) {
        alert("Lütfen uygun bir Email adresi giriniz.");
        return false;
    }
    if (password == "") {
        alert("Şifre alanı boş bırakılamaz.");
        return false;
    }
    return true;
}