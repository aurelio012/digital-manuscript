// The folio line that opens each page: "§ 01 / About".
// Numbering follows the order of the primary navigation.
export default function RunningHead({
    folio,
    label,
    className,
}: {
    folio: string;
    label: string;
    className?: string;
}) {
    return (
        <p className={className ? `eyebrow ${className}` : 'eyebrow'}>
            <span className="section-mark" aria-hidden="true">§</span>
            {folio}{' '}
            <span className="divider" aria-hidden="true">/</span>{' '}
            {label}
        </p>
    );
}
