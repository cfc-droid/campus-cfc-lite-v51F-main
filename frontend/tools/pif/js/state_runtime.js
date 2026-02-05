/* ============================================================
   PIF Runtime State
   Contrato CFC V13
   ============================================================ */

const runtimeState = {
  answersByQid: {},
  profileKey: null,
  route: null,
  mirrorAnswer: null,
  testMode: false
};

/* ===============================
   ANSWERS
=============================== */

export function setAnswer(qid, optionKey) {

  if (!qid) return;
  if (!optionKey) return;

  runtimeState.answersByQid[qid] = optionKey;
}

export function getAnswer(qid) {
  return runtimeState.answersByQid[qid] || null;
}

export function getAllAnswers() {
  return { ...runtimeState.answersByQid };
}

/* ===============================
   PROFILE
=============================== */

export function setProfile(profileKey) {
  runtimeState.profileKey = profileKey;
}

export function getProfile() {
  return runtimeState.profileKey;
}

/* ===============================
   ROUTE
=============================== */

export function setRoute(routeObj) {
  runtimeState.route = routeObj;
}

export function getRoute() {
  return runtimeState.route;
}

/* ===============================
   MIRROR ANSWER
=============================== */

export function setMirrorAnswer(optionKey) {
  runtimeState.mirrorAnswer = optionKey;
}

export function getMirrorAnswer() {
  return runtimeState.mirrorAnswer;
}

/* ===============================
   TEST MODE
=============================== */

export function setTestMode(flag) {
  runtimeState.testMode = !!flag;
}

export function isTestMode() {
  return runtimeState.testMode;
}

/* ===============================
   QUIZ COMPLETION
   VALIDACIÓN FUERTE
=============================== */

export function isQuizComplete(totalQuestions = 30) {

  const answers = runtimeState.answersByQid;

  const keys = Object.keys(answers);

  if (keys.length !== totalQuestions) return false;

  for (const qid of keys) {

    const value = answers[qid];

    if (
      value === null ||
      value === undefined ||
      value === "" ||
      typeof value !== "string"
    ) {
      return false;
    }
  }

  return true;
}

/* ===============================
   RESET
=============================== */

export function resetRuntime() {
  runtimeState.answersByQid = {};
  runtimeState.profileKey = null;
  runtimeState.route = null;
  runtimeState.mirrorAnswer = null;
  runtimeState.testMode = false;
}

/* ===============================
   EXIT TO CAMPUS
=============================== */

export function exitToCampus() {
  resetRuntime();
  window.location.href = "../index.html";
}
