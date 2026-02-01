(function CFC_DOMAIN_LOCK_V72() {
  try {
    const allowedHosts = [
      "campus-cfc-lite-v51f-main.pages.dev"
    ];

    const host = (location.hostname || "").toLowerCase();
    const isAllowed = allowedHosts.includes(host);

    const isFile = location.protocol === "file:";
    const isLocal = ["localhost", "127.0.0.1"].includes(host);
    const inIframe = window.top !== window.self;

    const ua = navigator.userAgent.toLowerCase();
    const isWebView =
      ua.includes("fbav") ||
      ua.includes("instagram") ||
      ua.includes("wv");

    if (!isAllowed || isFile || isLocal || inIframe || isWebView) {
      window.location.href = "/frontend/blocked.html";
      return;
    }

    window.CFC_DOMAIN_OK = true;
  } catch {
    window.location.href = "/frontend/blocked.html";
  }
})();
