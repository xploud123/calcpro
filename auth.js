// auth.js

async function protegerPagina() {
  const { data, error } = await window.supabaseClient.auth.getSession();

  if (error || !data.session) {
    window.location.replace("login.html");
  }
}