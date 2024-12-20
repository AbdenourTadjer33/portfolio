import React from "react";

export function useMediaQuery(query: string): boolean {
    const subscribe = React.useCallback(
        (callback) => {
            const matchMedia = window.matchMedia(query);
            matchMedia.addEventListener("change", callback);
            return () => matchMedia.removeEventListener("change", callback);
        },
        [query]
    );

    const getSnapshot = React.useCallback(() => {
        return window.matchMedia(query).matches;
    }, [query]);

    const getServerSnapshot = React.useCallback(() => {
        throw Error("useMediaQuery is a client-only hook");
    }, []);

    return React.useSyncExternalStore(
        subscribe,
        getSnapshot,
    );
}
