import { useEffect, useRef, useState } from "react";

export function useDebounce<T>(value: T, defaultValue: T, ms: number) {
    const [debouncing, setDebouncing] = useState(false);
    const [debouncedValue, setDebouncedValue] = useState<T>(defaultValue);
    const timerRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        let isCanceld = false;
        setDebouncing(true);
        timerRef.current = setTimeout(() => {
            if (isCanceld) return;
            setDebouncedValue(value)
            setDebouncing(false);
        }, ms);

        return () => {
            isCanceld = true;
            if (timerRef.current) {
                clearTimeout(timerRef.current);
                setDebouncing(false);
            }
        }
    }, [value, ms]);

    return {
        debouncedValue,
        debouncing
    }
}