// This component uses state and click/hover events, which only work in the browser.
// "use client" tells Next.js to send this component's JavaScript to the browser.
"use client";

import { useState, type ReactNode } from "react";
// next/image: Next.js image component that resizes and lazy-loads images automatically.
import Image from "next/image";
// "@/" is a shortcut for the "src/" folder (configured in tsconfig.json).
import { aboutItems, type AboutItem, type Highlight, type HighlightInfo } from "@/content/about";

export default function AboutList() {
  // Which line is currently open. null = all lines closed.
  // Storing one id (not one boolean per line) means only one line can be open at a time.
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <ul className="mt-8 w-full max-w-xl space-y-2">
      {/* Render one <li> for each item in the content file */}
      {aboutItems.map((item) => {
        const isOpen = openId === item.id;
        return (
          // React needs a unique "key" on each item in a list to track it between renders
          <li key={item.id}>
            {/* A real <button> (not a div) so it works with keyboard and screen readers */}
            <button
              type="button"
              // Clicking an open line closes it; clicking a closed line opens it
              onClick={() => setOpenId(isOpen ? null : item.id)}
              // Tells screen readers whether this section is expanded
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-lg text-neutral-200 transition hover:bg-neutral-800"
            >
              <span>{item.title}</span>
              {/* The "+" rotates 45deg into an "×" when open */}
              <span className={`text-xl transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
            </button>

            {/* Conditional rendering: the detail only exists in the page when isOpen is true */}
            {isOpen && (
              <div className="px-4 pb-3 pt-1 text-neutral-400">
                <DetailText item={item} />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

// Renders the revealed text, turning each highlighted word into a tooltip trigger.
function DetailText({ item }: { item: AboutItem }) {
  // `?? []` = use an empty list when the item has no highlights
  return <p>{withHighlights(item.text, item.highlights ?? [])}</p>;
}

// Turns a sentence into a mix of plain text and tooltip words.
// Example: "I enjoy playing video games and making music."
//   -> ["I enjoy playing ", <video games tooltip>, " and making ", <music tooltip>, "."]
function withHighlights(text: string, highlights: Highlight[]): ReactNode[] {
  // Start with the whole sentence as one piece of plain text
  let parts: ReactNode[] = [text];

  // For each highlight, split every remaining plain-text piece around its word
  for (const h of highlights) {
    parts = parts.flatMap((part) => {
      // Already a tooltip element: keep it as is
      if (typeof part !== "string") return [part];

      const pieces = part.split(h.match);
      // Re-join the pieces, putting a tooltip where each match was
      return pieces.flatMap((piece, i) =>
        i === 0
          ? [piece]
          : [<InfoTooltip key={`${h.match}-${i}`} label={h.match} info={h.info} />, piece]
      );
    });
  }
  return parts;
}

// A word that shows extra info on hover (desktop) or tap (mobile).
function InfoTooltip({ label, info }: { label: string; info: HighlightInfo }) {
  // Two separate states:
  // - hovered: mouse is over the word (desktop only)
  // - pinned:  user clicked/tapped to keep it open
  const [hovered, setHovered] = useState(false);
  const [pinned, setPinned] = useState(false);
  const show = hovered || pinned; // Show if either is true

  return (
    // "relative" so the tooltip below can be positioned relative to this word
    <span
      className="relative inline-block"
      // Only react to a real mouse. On phones, a tap can fire fake "pointer enter"
      // events, which would make hover and tap fight each other.
      onPointerEnter={(e) => e.pointerType === "mouse" && setHovered(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setHovered(false)}
    >
      <button
        type="button"
        // Toggle pinned: tap once to open, tap again to close
        onClick={() => setPinned((p) => !p)}
        className="font-medium text-white underline decoration-dotted underline-offset-4"
      >
        {label}
      </button>

      {show && (
        // Only span and image elements in here, because this sits inside a <p>
        // (a <div> inside a <p> is invalid HTML and React will warn about it)
        <span
          role="tooltip"
          // "absolute top-full" places the box right under the word.
          // "max-w-[80vw]" stops it from overflowing narrow phone screens.
          className="absolute left-0 top-full z-10 mt-2 block w-64 max-w-[80vw] rounded-lg border border-neutral-700 bg-neutral-900 p-4 text-sm text-neutral-300 shadow-lg"
        >
          {/* Title on top */}
          <span className="block font-semibold text-white">{info.name}</span>

          {/* Image below the title, only if this highlight has one */}
          {info.image && (
            <Image
              src={info.image.src}
              alt={info.image.alt}
              width={240}
              height={160}
              className="mt-3 h-auto w-full rounded-md object-cover"
            />
          )}

          {/* One line per fact, e.g. "Location: Central Coast". `?.` skips this if there are no facts */}
          {info.facts?.map((f) => (
            <span key={f.label} className="mt-1 block">
              <span className="text-neutral-500">{f.label}:</span> {f.value}
            </span>
          ))}
        </span>
      )}
    </span>
  );
}
