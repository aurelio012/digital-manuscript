"use client";

import { useEffect, useRef, useState } from 'react';

export default function CopyEmail({ email, className }: { email: string; className?: string }) {
    const [copied, setCopied] = useState(false);
    const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

    useEffect(() => () => clearTimeout(timer.current), []);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            clearTimeout(timer.current);
            timer.current = setTimeout(() => setCopied(false), 2200);
        } catch {
            // Clipboard unavailable (insecure context, denied permission) — fall back to the mail client
            window.location.href = `mailto:${email}`;
        }
    };

    return (
        <button type="button" onClick={copy} className={className}>
            <span aria-live="polite">{copied ? 'Copied' : 'Copy address'}</span>
        </button>
    );
}
