// login.js

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("login-btn");
  const errorMsg = document.getElementById("error-msg");

  loginBtn.addEventListener("click", async () => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      errorMsg.style.display = "block";
      errorMsg.innerText = "Preencha e-mail e senha.";
      return;
    }

    errorMsg.style.display = "none";

    const { error } =
      await window.supabaseClient.auth.signInWithPassword({
        email,
        password,
      });

    if (error) {
      errorMsg.style.display = "block";
      errorMsg.innerText = error.message;
      return;
    }

    // ⏳ Aguarda a sessão existir de verdade
    const { data } =
      await window.supabaseClient.auth.getSession();

    if (data.session) {
      window.location.replace("index.html");
    } else {
      errorMsg.style.display = "block";
      errorMsg.innerText = "Erro ao criar sessão. Tente novamente.";
    }
  });
});