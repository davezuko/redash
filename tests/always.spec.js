const test       = require('ava')
    , { always } = require('../dist/redash')

test('returns a function', (t) => {
  t.is(typeof always(5), 'function')
})

test('returns the provided value from the produced function', (t) => {
  t.is(always(5)(), 5)
})

test('works for multiple invocations', (t) => {
  const always5 = always(5)

  t.is(always5(), 5)
  t.is(always5(), 5)
  t.is(always5(), 5)
})
