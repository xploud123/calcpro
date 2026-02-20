// auth.js

document.addEventListener("DOMContentLoaded", async () => {

  // Aguarda o Supabase restaurar a sessão
  const { data, error } = await window.supabaseClient.auth.getSession();

  if (!data.session) {
    window.location.replace("login.html");
  }

});
