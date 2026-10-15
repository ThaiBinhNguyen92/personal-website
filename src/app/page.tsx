// Imports always go at the top of the file.
import AboutList from "@/components/AboutList";

// Placeholder names for the three small sections (to be replaced later).
const sections = ["A", "B", "C"];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 px-4 py-10 sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        {/* Big section: name + interactive "about me" list */}
        <section className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-neutral-700 bg-neutral-900 p-8">
          <h1 className="text-center text-4xl font-bold tracking-widest text-white sm:text-6xl">
            THAI BINH NGUYEN
          </h1>
          <AboutList />
        </section>

        {/* Three small sections: 1 column on phones, 3 equal columns from the sm breakpoint */}
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
