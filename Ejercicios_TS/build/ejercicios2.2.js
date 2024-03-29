"use strict";
function padLeft(value, padding) {
    if (typeof padding === 'number') {
        return `${Array(padding + 1).join(' ')}${value}`;
    }
    else if (typeof padding === 'string') {
        return padding + value;
    }
}
console.log('[Ejercicio 4.2]', `
${padLeft('', 0)}
${padLeft('', '')}
${padLeft('', '')}
${padLeft('', '')}
${padLeft('', '')}
`);
