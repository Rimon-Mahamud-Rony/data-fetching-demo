export default function Loading() {
    
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-white via-cyan-50 to-white">
      <p className="text-xl text-cyan-700">
        Next-JS Data fetching practice...{" "}
      </p>
      <div className="relative flex h-80 w-80 items-center justify-center">
        {/* Outer Glow */}
        <div className="absolute h-full w-full animate-ping rounded-full bg-cyan-400/10" />

        {/* Outer Ring */}
        <div className="absolute h-64 w-64 animate-spin rounded-full border-4 border-cyan-100 border-t-cyan-500" />

        {/* Inner Ring */}
        <div className="absolute h-48 w-48 animate-[spin_2s_linear_infinite_reverse] rounded-full border-4 border-cyan-200 border-b-cyan-500" />

        {/* Center Pulse */}
        <div className="h-20 w-20 animate-pulse rounded-full bg-cyan-400/30 backdrop-blur-sm" />
      </div>
    </div>
  );
}
