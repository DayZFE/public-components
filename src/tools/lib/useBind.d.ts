/// <reference types="react" />
/**
 * bind a ref to state
 *
 * @export
 * @template T
 * @param {T} val
 * @return {*}
 */
export default function useBind<T>(val: T): import("react").MutableRefObject<T>;
