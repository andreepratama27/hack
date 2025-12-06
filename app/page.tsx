export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4 py-16 font-sans dark:bg-black">
      <main className="w-full max-w-4xl rounded-[32px] border border-white bg-white p-12 shadow-[0_40px_120px_rgba(15,23,42,0.08)] transition dark:border-zinc-900 dark:bg-zinc-950 dark:shadow-[0_40px_120px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 text-center sm:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Idea to build
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-zinc-950 dark:text-zinc-50">
              What do you want to build today?
            </h1>
            <p className="text-lg text-zinc-500 dark:text-zinc-400">
              Upload your PDF brief, pitch deck, or requirements document. We'll
              read it and generate the next steps to bring your idea to life.
            </p>
          </div>

          <label
            htmlFor="pdf-upload"
            className="group relative flex flex-col items-center gap-6 rounded-[28px] border border-dashed border-zinc-200 bg-gradient-to-b from-white via-zinc-50 to-white p-10 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] transition hover:border-zinc-300 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:border-zinc-800 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-950"
          >
            <input
              id="pdf-upload"
              type="file"
              accept="application/pdf"
              className="sr-only"
            />
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-zinc-950 to-zinc-800 text-white shadow-xl shadow-zinc-200/80 dark:from-white dark:to-zinc-200 dark:text-zinc-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-10 w-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v12m0 0l4-4m-4 4l-4-4M6 20h12"
                />
              </svg>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                Drop your PDF here
              </p>
              <p className="text-base text-zinc-500 dark:text-zinc-400">
                or{" "}
                <span className="font-medium text-black dark:text-white group-hover:text-zinc-900">
                  browse
                </span>{" "}
                from your device
              </p>
            </div>
            <div className="flex w-full items-center gap-4 text-sm text-zinc-400 dark:text-zinc-500">
              <span className="h-px flex-1 bg-current/40" />
              <span>PDF only · up to 25 MB</span>
              <span className="h-px flex-1 bg-current/40" />
            </div>
          </label>
        </div>
      </main>
    </div>
  );
}
