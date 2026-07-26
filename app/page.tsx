import CommonPageDesign from "./components/commonPageDesign";
export default function Home() {
  return (
    <CommonPageDesign>
      {/* Glass Card */}
      <section className="relative w-full max-w-4xl rounded-md border border-cyan-100 bg-slate-800 p-20 shadow-4xl backdrop-blur-4xl">
        {/* Small Badge */}
        <div className="w-full flex justify-end">
          <div className="mb-8 inline-flex rounded-sm border border-white/60 bg-cyan-100 px-4 py-1 text-sm font-medium text-cyan-700">
            Next.js Practice
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold tracking-tight text-slate-400 md:text-5xl">
          Build.
          <span className="text-cyan-500"> Learn.</span>
          Repeat.
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-lg text-base leading-7 text-slate-400">
          A simple workspace to practice Next.js, React, Tailwind CSS,
          authentication, APIs, and modern frontend development.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex gap-4">
          <button className="rounded-sm bg-cyan-500 px-6 py-1 font-sm text-white transition hover:bg-cyan-600">
            Get Started
          </button>

          <button className="rounded-sm border border-cyan-200 bg-white/60 px-6 py-1 font-sm text-slate-700 backdrop-blur hover:bg-white">
            Explore
          </button>
        </div>
      </section>
    </CommonPageDesign>
  );
}
