// auth.js

document.addEventListener("DOMContentLoaded", async () => {

  const {
    data: { session },
  } = await window.supabaseClient.auth.getSession();

  if (session) return;

  window.supabaseClient.auth.onAuthStateChange((event, session) => {
    if (!session) {
      window.location.replace("login.html");
    }
  });

});
