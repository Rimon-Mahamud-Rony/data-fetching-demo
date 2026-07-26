"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-white via-red-50 to-white px-5">
      <div className="flex w-full max-w-lg flex-col items-center rounded-3xl border border-red-200/50 bg-white/80 p-10 text-center shadow-2xl backdrop-blur-xl">
        {/* Danger Icon */}
        <div className="relative mb-6 flex h-28 w-28 items-center justify-center">
          <div className="absolute h-full w-full animate-pulse rounded-full bg-red-500/20" />

          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-red-500/10 text-5xl">
            ⚠️
          </div>
        </div>

        {/* Error Title */}
        <h2 className="mb-3 text-xl font-bold text-gray-900">
          Something went wrong!
        </h2>

        <p className="mb-6 text-slate-400">
          We couldn't complete your request. Please try again.
        </p>

        {/* Error Details */}
        <div className="mb-8 w-full rounded-xl border border-red-100 bg-red-50/70 p-4 text-left">
          <p className="mb-2 text-sm text-center font-semibold text-slate-700">
            Error Details
          </p>

          <p className="break-word text-3xl text-red-700">
            {error.message || "Unknown error occurred"}
          </p>

          {error.digest && (
            <p className="mt-3 text-xs text-gray-500">
              Error ID: {error.digest}
            </p>
          )}
        </div>

        {/* Retry Button */}
        <button
          onClick={() => reset()}
          className="rounded-xl bg-red-500 px-8 py-3 font-medium text-white shadow-lg shadow-red-500/30 transition hover:bg-red-600 active:scale-95"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
