import {
    task2Validator
} from "./../additional-scripts/validator.js";

export function envelopeAnalysis(env1, env2) {
    const isVal = task2Validator(env1, env2);
    if (isVal !== null) {
        return isVal
    }

    if (env1.a < env1.b) {
        [env1.a, env1.b] = [env1.b, env1.a];
    }
    if (env2.c < env2.d) {
        [env2.c, env2.d] = [env2.d, env2.c];
    }

    if (env2.c < env1.a && env2.d < env1.b || env2.c > env1.a && env2.d <= env1.b && carversFormula(env1.a, env1.b, env2.c, env2.d)) {
        return 1
    } else if (env1.a < env2.c && env1.b < env2.d || env1.a > env2.c && env1.b <= env2.d && carversFormula(env2.c, env2.d, env1.a, env1.b)) {
        return 2
    } else {
        return 0
    }
}

function carversFormula(a, b, p, q) {
    return ((((a + b) / (p + q)) ** 2) + (((a - b) / (p - q)) ** 2)) >= 2
}