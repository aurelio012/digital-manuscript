"use client";

import { useSyncExternalStore } from 'react';

const format = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short',
});

const subscribe = (onTick: () => void) => {
    const timer = setInterval(onTick, 15000);
    return () => clearInterval(timer);
};

// The current time in New York, so correspondents know when they're writing.
// Renders a dash on the server; the clock appears after hydration.
export default function LocalTime({ className }: { className?: string }) {
    const time = useSyncExternalStore(
        subscribe,
        () => format.format(Date.now()),
        () => null,
    );
    return <span className={className}>{time ?? '—'}</span>;
}
