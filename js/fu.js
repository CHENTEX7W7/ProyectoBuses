const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        tab.classList.add("active");
        document.getElementById(tab.getAttribute("data-tab")).classList.add("active");
    });
});

const registerForm = document.querySelector("#register form");
const loginForm = document.querySelector("#login form");

registerForm.addEventListener("submit", e => {
    e.preventDefault();
    const nombre = registerForm.querySelector('input[type="text"]').value.trim();
    const email = registerForm.querySelector('input[type="email"]').value.trim();
    const password = registerForm.querySelector('input[type="password"]').value.trim();

    if(nombre === "" || email === "" || password === "") {
        alert("Todos los campos son obligatorios");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
        alert("Correo electrónico no válido");
        return;
    }

    if(password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
        return;
    }

    window.location.href = "ventas.html";
});

loginForm.addEventListener("submit", e => {
    e.preventDefault();
    const email = loginForm.querySelector('input[type="email"]').value.trim();
    const password = loginForm.querySelector('input[type="password"]').value.trim();

    if(email === "" || password === "") {
        alert("Todos los campos son obligatorios");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
        alert("Correo electrónico no válido");
        return;
    }

    window.location.href = "ventas.html";
});
