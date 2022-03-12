import { useEffect, useState } from "react";

export const useWindowSize = () => {
    const [state, setState] = useState(typeof window === 'undefined' ? 1024 : window?.innerWidth);

    const handler = () => {
        setState(window?.innerWidth)
    }

    useEffect(() => {
        window?.addEventListener("resize", handler);
        window?.addEventListener('orientationchange', handler);


        return () => {
            window?.removeEventListener("resize", handler);
            window?.removeEventListener("orientationchange", handler);
        };
    }, []);

    return state;
}

export default useWindowSize;
