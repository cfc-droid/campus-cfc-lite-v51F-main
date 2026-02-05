/* ============================================================
   PIF Profile Engine — CFC CONTRACT V13
   Deterministic scoring → profile_key
   NO UI
   NO runtime mutation
   NO score exposure
   ============================================================ */

import { SCORING_MAP_V1 } from "./scoring_map_v1.js";
import { RISK_PRIORITY_V1 } from "./risk_priority_v1.js";


/* ============================================================
   INTERNAL VALIDATIONS
   ============================================================ */

function validateAnswersObject(answersByQid) {

    if (!answersByQid || typeof answersByQid !== "object") {
        throw new Error("[PIF] answersByQid inválido");
    }

    const keys = Object.keys(answersByQid);

    if (keys.length === 0) {
        throw new Error("[PIF] No hay respuestas cargadas");
    }
}


function validateScoringMap() {

    if (!SCORING_MAP_V1 || typeof SCORING_MAP_V1 !== "object") {
        throw new Error("[PIF] SCORING_MAP_V1 inválido");
    }

    if (!RISK_PRIORITY_V1 || !Array.isArray(RISK_PRIORITY_V1)) {
        throw new Error("[PIF] RISK_PRIORITY_V1 inválido");
    }
}


/* ============================================================
   QID NORMALIZER
   - Acepta qid como: 1 | "1" | "Q01" | "q01"
   - Busca en SCORING_MAP_V1 por ambas variantes
   ============================================================ */

function resolveQuestionMap(qidRaw) {

    // 1) intento directo
    if (SCORING_MAP_V1[qidRaw]) {
        return { key: qidRaw, map: SCORING_MAP_V1[qidRaw] };
    }

    // 2) normalización string
    const s = String(qidRaw).trim();

    // "Q01" -> 1 (y viceversa)
    if (/^q\d{1,3}$/i.test(s)) {

        const n = parseInt(s.slice(1), 10);

        if (SCORING_MAP_V1[n]) {
            return { key: n, map: SCORING_MAP_V1[n] };
        }

        const qKey = `Q${String(n).padStart(2, "0")}`;

        if (SCORING_MAP_V1[qKey]) {
            return { key: qKey, map: SCORING_MAP_V1[qKey] };
        }
    }

    // "1" -> 1 y "Q01"
    if (/^\d{1,3}$/.test(s)) {

        const n = parseInt(s, 10);

        if (SCORING_MAP_V1[n]) {
            return { key: n, map: SCORING_MAP_V1[n] };
        }

        const qKey = `Q${String(n).padStart(2, "0")}`;

        if (SCORING_MAP_V1[qKey]) {
            return { key: qKey, map: SCORING_MAP_V1[qKey] };
        }
    }

    return { key: s, map: null };
}


/* ============================================================
   SCORE ACCUMULATOR
   ============================================================ */

function accumulateScores(answersByQid) {

    const scoreByProfile = {};

    Object.entries(answersByQid).forEach(([qidRaw, optionKey]) => {

        const { key: resolvedKey, map: qMap } = resolveQuestionMap(qidRaw);

        if (!qMap) {
            throw new Error(`[PIF] Falta scoring map para pregunta ${resolvedKey}`);
        }

        const optionMap = qMap[optionKey];

        if (!optionMap || typeof optionMap !== "object") {
            throw new Error(`[PIF] Falta scoring para ${resolvedKey} opción ${optionKey}`);
        }

        Object.entries(optionMap).forEach(([profileKey, weight]) => {

            if (!scoreByProfile[profileKey]) {
                scoreByProfile[profileKey] = 0;
            }

            scoreByProfile[profileKey] += weight;
        });
    });

    return scoreByProfile;
}


/* ============================================================
   TIE BREAKER BY RISK PRIORITY
   delta ≤ 2 → resolve by risk order
   ============================================================ */

function resolveTieByRisk(scoreByProfile) {

    const entries = Object.entries(scoreByProfile);

    if (entries.length === 0) {
        throw new Error("[PIF] No hay perfiles calculados");
    }

    entries.sort((a, b) => b[1] - a[1]);

    const [topProfile, topScore] = entries[0];

    if (entries.length === 1) {
        return topProfile;
    }

    const [secondProfile, secondScore] = entries[1];

    const delta = topScore - secondScore;

    if (delta > 2) {
        return topProfile;
    }

    /* --- empate psicológico --- */

    for (const riskProfile of RISK_PRIORITY_V1) {

        if (riskProfile === topProfile || riskProfile === secondProfile) {
            return riskProfile;
        }
    }

    return topProfile;
}


/* ============================================================
   PUBLIC ENGINE
   ============================================================ */

export function calculateProfileKey(answersByQid) {

    validateScoringMap();
    validateAnswersObject(answersByQid);

    const scoreByProfile = accumulateScores(answersByQid);

    const profileKey = resolveTieByRisk(scoreByProfile);

    if (!profileKey || typeof profileKey !== "string") {
        throw new Error("[PIF] profileKey inválido");
    }

    return profileKey;
}
