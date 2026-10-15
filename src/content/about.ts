// Shape of the extra info shown when hovering/tapping a place name.
export type HighlightInfo = {
  name: string; // Title shown at the top of the tooltip
  facts: { label: string; value: string }[]; // List of "label: value" lines
};

// Shape of one line in the "about me" list.
export type AboutItem = {
  id: string;    // Unique key, used by React and to track which line is open
  title: string; // Text shown on the clickable line
  text: string;  // Text revealed when the line is opened
  // Optional: a word inside `text` that gets a tooltip.
  // `match` must appear exactly as written in `text`.
  highlight?: { match: string; info: HighlightInfo };
};

// The actual content. To add a new line, add a new object to this array.
// The UI reads from here, so you never need to touch the component for content changes.
export const aboutItems: AboutItem[] = [
  {
    id: "about",
    title: "About me",
    text: "Tôi đến từ Quang Ngai city, Vietnam.",
    highlight: {
      match: "Quang Ngai city",
      info: {
        name: "Quảng Ngãi, Việt Nam",
        facts: [
          { label: "Location", value: "Duyên hải miền Trung" },
          { label: "Famous for", value: "Đảo Lý Sơn, sông Trà Khúc" },
          { label: "Economy", value: "Khu kinh tế Dung Quất" },
        ],
      },
    },
  },
    // Line 2: career. "WSU" becomes a tooltip, same as the city in line 1.
  {
    id: "career",
    title: "Nghề nghiệp",
    text: "I graduated from WSU with a degree in Computer Science.",
    highlight: {
      match: "WSU", // Must appear exactly once in `text`
      info: {
        name: "Washington State University",
        facts: [
          { label: "Location", value: "Pullman, Washington, Mỹ" },
          { label: "Founded", value: "1890" },
          { label: "Mascot", value: "Butch the Cougar" },
        ],
      },
    },
  },
];