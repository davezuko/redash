import _slice from './internal/_slice'

/**
 * @name insert
 * @category Collection
 * @since v0.11.0
 * @description
 * Inserts a value at a given index in a list. This does not replace the
 * current value, but rather shifts it and all following elements to the right.
 * @see append
 * @see prepend
 *
 * @example
 * insert(1, 2, [0, 2, 3]) // => [0, 1, 2, 3]
 */
export default function insert (idx, x, xs) {
  var ys = _slice.call(xs, 0, idx)
  ys[ys.length] = x
  return ys.concat(_slice.call(xs, idx))
}
