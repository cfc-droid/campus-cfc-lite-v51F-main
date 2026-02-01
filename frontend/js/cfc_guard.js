// 🛡️ CFC SESSION GUARD — STATIC MODE SAFE

(function CFC_SESSION_GUARD_STATIC() {
  try {
    const path = location.pathname || "";

    const isLogin = path.includes("/login.html");
    const isBlocked = path.includes("/blocked.html");

    if (isLogin || isBlocked) return;

    const isValid = sessionStorage.getItem("CFC_LOGIN_OK") === "true";

    if (!isValid) {
      console.warn("🛡️ CFC-GUARD: sesión ausente → login");
      location.href = "html/login.html";
      return;
    }

    console.log("🛡️ CFC-GUARD: sesión válida ✔");
  } catch {
    location.href = "html/login.html";
  }
})();
