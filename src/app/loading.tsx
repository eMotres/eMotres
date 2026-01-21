export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-surface-primary">
            <div className="relative w-24 h-24">
                <div className="absolute top-0 left-0 w-full h-full border-4 border-surface-tertiary rounded-full"></div>
                <div className="absolute top-0 left-0 w-full h-full border-4 border-brand rounded-full border-t-transparent animate-spin"></div>
            </div>
        </div>
    );
}
