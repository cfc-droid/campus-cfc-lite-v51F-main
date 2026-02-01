/* ==========================================================
   🟩 CFC_LOCK_CORE_V72_ENFORCE_REAL (GLOBAL)
   Sistema híbrido Render + Local
   Función: Heartbeat + Update + Check + Expulsión Real
   Auditor: CFC-SYNC
   ========================================================== */

(function () {

  // 🔒 MODO ESTÁTICO (Campus Finanzas)
  const API = null;               // ⛔ Backend deshabilitado
  const CFC_LOCK_ENFORCE = false; // ⛔ No expulsión remota

  console.log("🧩 QA-SYNC | CFC_LOCK_CORE V72 cargado (MODO ESTÁTICO)");

  /* -------------------------------------------
     Obtener MSCU local
  ------------------------------------------- */
  function getLocalSession() {
    const email = localStorage.getItem("CFC_EMAIL");
    const device_id = localStorage.getItem("CFC_DEVICE_ID");
    const session_id = localStorage.getItem("CFC_SESSION_ID");
    return (email && device_id && session_id)
      ? { email, device_id, session_id }
      : null;
  }

  /* -------------------------------------------
     Limpieza full excepto progreso
  ------------------------------------------- */
  function clearMSCU() {
    console.log("🧹 [CFC-LOCK] Limpieza MSCU LOCAL…");

    const preserve = ["CFC_PROGRESS", "CFC_TIMER", "CFC_LAST_MODULE", "CFC_HISTORY"];

    Object.keys(localStorage).forEach(k => {
      if (!preserve.includes(k)) localStorage.removeItem(k);
    });

    sessionStorage.clear();
  }

  /* -------------------------------------------
     EXPULSIÓN REAL (DESHABILITADA EN MODO ESTÁTICO)
  ------------------------------------------- */
  async function forceLogout(reason, email, device_id) {
    if (!CFC_LOCK_ENFORCE) return;

    if (window.__CFC_FORCELOGOUT_ACTIVE__) return;
    window.__CFC_FORCELOGOUT_ACTIVE__ = true;

    console.warn("🚨 EXPULSIÓN REAL:", { reason, email, device_id });

    if (window.CFC_showBlockOverlay)
      CFC_showBlockOverlay(email, device_id, reason);

    clearMSCU();

    document.body.style.pointerEvents = "none";
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      window.location.href = "/frontend/html/login.html";
    }, 1500);
  }

  /* -------------------------------------------
     Heartbeat (NO-OP en modo estático)
  ------------------------------------------- */
  async function sendHeartbeat(s) {
    if (!API) return;
    try {
      const r = await fetch(`${API}/heartbeat`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ email: s.email, device_id: s.device_id })
      });
      console.log("❤️ [HEARTBEAT]", await r.json());
    } catch (e) {
      console.warn("⚠️ Heartbeat deshabilitado (modo estático)");
    }
  }

  /* -------------------------------------------
     Update-session (NO-OP en modo estático)
  ------------------------------------------- */
  async function sendUpdate(s) {
    if (!API) return;
    try {
      const r = await fetch(`${API}/update-session`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(s)
      });
      const json = await r.json();
      console.log("🟡 [UPDATE-SESSION]", json);

      if (CFC_LOCK_ENFORCE && json.status === "invalid") {
        await forceLogout(
          "Sesión iniciada en otro dispositivo (UPDATE)",
          s.email,
          s.device_id
        );
      }

    } catch (e) {
      console.warn("⚠️ update-session deshabilitado (modo estático)");
    }
  }

  /* -------------------------------------------
     Check remoto (NO-OP en modo estático)
  ------------------------------------------- */
  async function checkRemote(s) {
    if (!API) return;
    try {
      const r = await fetch(
        `${API}/check-session?email=${s.email}&device_id=${s.device_id}`
      );
      const json = await r.json();
      console.log("🌐 [CHECK-SESSION]", json);

      if (
        CFC_LOCK_ENFORCE &&
        (json.status === "invalid" || json.status === "expired")
      ) {
        await forceLogout(
          "Sesión iniciada en otro dispositivo (CHECK)",
          s.email,
          s.device_id
        );
      }

    } catch (e) {
      console.warn("⚠️ check-session deshabilitado (modo estático)");
    }
  }

  /* -------------------------------------------
     LOOP HEARTCORE (INERTE EN ESTÁTICO)
  ------------------------------------------- */
  async function heartcoreLoop() {

    if (!API) return;

    const s = getLocalSession();
    if (!s) return;

    // No ejecutar en login
    if (window.location.pathname.includes("login")) return;

    await sendHeartbeat(s);
    await sendUpdate(s);
    await checkRemote(s);
  }

  setInterval(heartcoreLoop, 5000);
  heartcoreLoop();

})();
