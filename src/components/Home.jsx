export default function Home({ onStart }) {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center py-12 text-center">
      <p className="mb-6 text-[2.2rem] font-medium tracking-tight text-cyan-300 sm:text-[2.9rem]">
        Welcome to the
      </p>

      <h1 className="text-[4rem] font-black leading-[0.9] tracking-[-0.06em] text-white sm:text-[6.3rem] lg:text-[7.5rem]">
        <span className="inline-block text-[#0a101a] drop-shadow-[0_0_20px_rgba(255,255,255,0.08)]">
          Frontend
        </span>{" "}
        <span className="inline-block bg-gradient-to-r from-violet-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Quiz!
        </span>
      </h1>

      <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
        Test your knowledge about web development and React.
        <br />
        Answer 10 questions and see how much you know!
      </p>

      <button
        onClick={onStart}
        className="mt-9 flex w-[240px] items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-500 px-8 py-4 text-[1.05rem] font-bold text-white shadow-[0_0_30px_rgba(104,87,255,0.5)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_36px_rgba(70,180,255,0.5)]"
      >
        <span className="text-[1.5rem] leading-none">▶</span>
        <span>Start Quiz</span>
      </button>
    </section>
  );
}
