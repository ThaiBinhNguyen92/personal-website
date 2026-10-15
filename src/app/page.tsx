const sections = ["A", "B", "C"];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 px-4 py-10 sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        {/* Ô lớn: tên */}
        <section className="flex min-h-64 items-center justify-center rounded-2xl border border-neutral-700 bg-neutral-900 p-8">
          <h1 className="text-center text-4xl font-bold tracking-widest text-white sm:text-6xl">
            THAI BINH NGUYEN
          </h1>
        </section>

        {/* 3 ô nhỏ: A, B, C */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {sections.map((name) => (
            <section
              key={name}
              className="flex min-h-48 items-center justify-center rounded-2xl border border-neutral-700 bg-neutral-900 p-6"
            >
              <h2 className="text-3xl font-semibold text-white">{name}</h2>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}