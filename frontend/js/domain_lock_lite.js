/* ============================================================
   CFC LITE — DOMAIN LOCK LITE (STATIC SAFE)
   ============================================================ */

(function () {

  const ALLOWED_HOSTS = [
    "campus-cfc-lite-v51f-main.pages.dev"
  ];

  // 1) IFRAME
  try {
    if (window.self !== window.top) {
      window.location.href = "/frontend/blocked.html";
      return;
    }
  } catch {
    window.location.href = "/frontend/blocked.html";
    return;
  }

  // 2) WEBVIEW
  const ua = navigator.userAgent.toLowerCase();
  const isWebView =
    ua.includes("wv") ||
    ua.includes("fbav") ||
    ua.includes("fb_iab") ||
    ua.includes("instagram") ||
    ua.includes("okhttp");

  if (isWebView) {
    window.location.href = "/frontend/blocked.html";
    return;
  }

  // 3) FILE
  if (location.protocol === "file:") {
    window.location.href = "/frontend/blocked.html";
    return;
  }

  // 4) LOCALHOST
  const host = location.hostname.toLowerCase();
  if (["localhost", "127.0.0.1", "::1"].includes(host)) {
    window.location.href = "/frontend/blocked.html";
    return;
  }

  // 5) DOMINIO
  if (!ALLOWED_HOSTS.includes(host)) {
    window.location.href = "/frontend/blocked.html";
    return;
  }

  window.CFC_DOMAIN_OK = true;
})();
