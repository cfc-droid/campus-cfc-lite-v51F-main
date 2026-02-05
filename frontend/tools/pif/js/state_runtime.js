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
=============================== */

export function isQuizComplete(totalQuestions = 30) {
  return Object.keys(runtimeState.answersByQid).length === totalQuestions;
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
