// Remounts on every navigation; the `.page` class runs the entry animation
// (see globals.css), so no client-side state is needed here.
export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div id="content" className="page" tabIndex={-1}>
            {children}
        </div>
    );
}
