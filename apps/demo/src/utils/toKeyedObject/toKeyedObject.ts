/* eslint-disable import/prefer-default-export */
/**
 * @description Takes an array of objects and transforms it into a
 * `keyed` object
 * @template {T
 * @param {T[]} arr
 *
 * @example
 *
 * [{id: 1, name: 'a'}, {id: 2, name: 'b'}]
 *
 * // to
 *
 * {
 *  1: {
 *    id: 1,
 *    name: 'a',
 *  },
 *  2: {
 *    id: 2,
 *    name: 'b',
 *  }
 * }
 *
 * @returns Object.<string, T>
 */
export default function toKeyedObject<T, K extends keyof T>(
  arr: T[],
  key: K,
): { [Key: string]: T } {
  return arr.reduce(
    (current, item) => ({
      ...current,
      [`${item[key]}`]: {
        ...item,
      },
    }),
    {},
  );
}
