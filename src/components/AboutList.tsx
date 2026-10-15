// This component uses state and click/hover events, which only work in the browser.
// "use client" tells Next.js to send this component's JavaScript to the browser.
"use client";

import { useState } from "react";
// "@/" is a shortcut for the "src/" folder (configured in tsconfig.json).
import { aboutItems, type AboutItem, type PlaceInfo } from "@/content/about";

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

// Renders the revealed text. If the item has a place, that word becomes a tooltip trigger.
function DetailText({ item }: { item: AboutItem }) {
  // No place defined: just show plain text
  if (!item.place) return <p>{item.text}</p>;

  // Split the sentence around the place name:
  // "Tôi đến từ Quang Ngai city, Vietnam." -> ["Tôi đến từ ", ", Vietnam."]
  const [before, after] = item.text.split(item.place.match);
  return (
    <p>
      {before}
      <PlaceTooltip label={item.place.match} place={item.place.info} />
      {after}
    </p>
  );
}

// A word that shows extra info on hover (desktop) or tap (mobile).
function PlaceTooltip({ label, place }: { label: string; place: PlaceInfo }) {
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
        <span
          role="tooltip"
          // "absolute top-full" places the box right under the word.
          // "max-w-[80vw]" stops it from overflowing narrow phone screens.
          className="absolute left-0 top-full z-10 mt-2 block w-64 max-w-[80vw] rounded-lg border border-neutral-700 bg-neutral-900 p-4 text-sm text-neutral-300 shadow-lg"
        >
          <span className="mb-2 block font-semibold text-white">{place.name}</span>
          {/* One line per fact, e.g. "Vùng: Duyên hải miền Trung" */}
          {place.facts.map((f) => (
            <span key={f.label} className="block">
              <span className="text-neutral-500">{f.label}:</span> {f.value}
            </span>
          ))}
        </span>
      )}
    </span>
  );
}