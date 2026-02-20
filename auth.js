// auth.js

document.addEventListener("DOMContentLoaded", async () => {

  // Espera o Supabase terminar de inicializar
  const {
    data: { session },
  } = await window.supabaseClient.auth.getSession();

  if (!session) {
    window.location.href = "/login.html";
  }

});
