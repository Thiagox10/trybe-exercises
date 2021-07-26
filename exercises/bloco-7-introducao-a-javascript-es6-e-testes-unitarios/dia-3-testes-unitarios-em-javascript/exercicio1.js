const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
// assert.strictEqual(sum(4,5), 9, "Resultado deve ser 9");
// assert.strictEqual(sum(0,0), 0, "Resultado deve ser 0");
// assert.strictEqual(sum(4,"5"), 9, "Resultado deve ser 9");
assert.throws(() => { sum(10, 0); }, /^parameters must be numbers$/);

