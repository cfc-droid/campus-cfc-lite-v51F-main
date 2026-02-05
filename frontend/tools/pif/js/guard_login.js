/* ============================================================
   PIF — Login Guard
   Contrato CFC V13
   ============================================================ */

export function enforcePifLogin() {

  try {

    const loginOk = sessionStorage.getItem("CFC_LOGIN_OK");

    if (!loginOk) {

      console.warn("[PIF] Usuario no autenticado. Redirigiendo a login...");

      window.location.href = "./html/login.html";

      return false;
    }

    return true;

  } catch (err) {

    console.error("[PIF] Error verificando login:", err);

    window.location.href = "./html/login.html";

    return false;
  }
}
