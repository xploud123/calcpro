// auth.js

window.supabaseClient.auth.onAuthStateChange((event, session) => {
  if (!session) {
    window.location.replace("login.html");
  }
});
