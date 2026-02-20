// auth.js

document.addEventListener("DOMContentLoaded", async () => {

  // Aguarda o Supabase terminar de carregar a sessão
  const { data: { session } } = await window.supabaseClient.auth.getSession();

  if (!session) {
    // Pequeno delay para garantir restauração
    setTimeout(async () => {
      const { data: { session: retrySession } } =
        await window.supabaseClient.auth.getSession();

      if (!retrySession) {
        window.location.replace("login.html");
      }
    }, 300);

  }

});
