/* ============================================================
   PIF Profile Engine — CFC CONTRACT V13
   ============================================================ */

import { SCORING_MAP_V1 } from "./scoring_map_v1.js";
import { RISK_PRIORITY_V1 } from "./risk_priority_v1.js";


function validateAnswersObject(answersByQid) {

    if (!answersByQid || typeof answersByQid !== "object") {
        throw new Error("[PIF] answersByQid inválido");
    }

    if (Object.keys(answersByQid).length === 0) {
        throw new Error("[PIF] No hay respuestas cargadas");
    }
}


function resolveQuestionMap(qidRaw) {

    const s = String(qidRaw).replace("Q","").replace("q","");

    const n = parseInt(s,10);

    if (SCORING_MAP_V1[n]) {
        return SCORING_MAP_V1[n];
    }

    throw new Error(`[PIF] Falta scoring map para pregunta ${qidRaw}`);
}


/* ============================================================
   SCORE ACCUMULATOR
   ============================================================ */

function accumulateScores(answersByQid) {

    const scoreByProfile = {};

    Object.entries(answersByQid).forEach(([qid, optionKey]) => {

        const qMap = resolveQuestionMap(qid);

        const optionArray = qMap[optionKey];

        if (!Array.isArray(optionArray)) {
            throw new Error(`[PIF] Scoring inválido para ${qid} opción ${optionKey}`);
        }

        optionArray.forEach(item => {

            const { profile, weight } = item;

            if (!scoreByProfile[profile]) {
                scoreByProfile[profile] = 0;
            }

            scoreByProfile[profile] += weight;

        });
    });

    return scoreByProfile;
}


/* ============================================================
   TIE BREAKER
   ============================================================ */

function resolveTieByRisk(scoreByProfile) {

    const entries = Object.entries(scoreByProfile)
        .sort((a,b)=> b[1] - a[1]);

    if (entries.length === 0) {
        throw new Error("[PIF] No hay perfiles calculados");
    }

    if (entries.length === 1) {
        return entries[0][0];
    }

    const [topProfile, topScore] = entries[0];
    const [secondProfile, secondScore] = entries[1];

    const delta = topScore - secondScore;

    if (delta > 2) return topProfile;

    for (const riskProfile of RISK_PRIORITY_V1) {
        if (riskProfile === topProfile || riskProfile === secondProfile) {
            return riskProfile;
        }
    }

    return topProfile;
}


/* ============================================================
   PUBLIC
   ============================================================ */

export function calculateProfileKey(answersByQid) {

    validateAnswersObject(answersByQid);

    const scoreByProfile = accumulateScores(answersByQid);

    return resolveTieByRisk(scoreByProfile);
}
