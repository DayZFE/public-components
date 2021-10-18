import { useEffect, useRef } from "react";
/**
 * bind a ref to state
 *
 * @export
 * @template T
 * @param {T} val
 * @return {*}
 */
export default function useBind(val) {
    const result = useRef(val);
    useEffect(() => {
        result.current = val;
    });
    return result;
}
