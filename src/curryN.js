import _defn from './internal/_defn'
import _curryN from './internal/_curryN'

/**
 * @name curryN
 * @signature Integer N => N -> (a1, a2, ..., aN -> v) -> a1 -> a2 -> ... -> aN -> v
 * @category Function
 * @description
 * Curries a function to a given arity, regardless of its actual arity.
 *
 * @see curry
 *
 * @example
 * const fn = curryN(3, (...args) => console.log(args))
 *
 * fn(1)       // => Function
 * fn(1)(2)    // => Function
 * fn(1, 2, 3) // => [1, 2, 3]
 * fn(1)(2)(3) // => [1, 2, 3]
 */
export default _defn(function curryN (arity, fn) {
  return _curryN(arity, [], fn)
})
