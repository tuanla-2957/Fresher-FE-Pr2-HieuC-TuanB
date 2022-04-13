import { useCallback, useState } from "react";

export const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState);
    const toggle = useCallback(() => setState(state => !state), []);
    const set = useCallback((state) => setState(state), []);
    
    return {state, toggle, set}
}