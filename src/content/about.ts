// Shape of the extra info shown when hovering/tapping a place name.
export type PlaceInfo = {
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
  place?: { match: string; info: PlaceInfo };
};

// The actual content. To add a new line, add a new object to this array.
// The UI reads from here, so you never need to touch the component for content changes.
export const aboutItems: AboutItem[] = [
  {
    id: "about",
    title: "About me",
    text: "Tôi đến từ Quang Ngai city, Vietnam.",
    place: {
      match: "Quang Ngai city",
      info: {
        name: "Quảng Ngãi, Việt Nam",
        facts: [
          { label: "Vùng", value: "Duyên hải miền Trung" },
          { label: "Nổi tiếng", value: "Đảo Lý Sơn, sông Trà Khúc" },
          { label: "Kinh tế", value: "Khu kinh tế Dung Quất" },
        ],
      },
    },
  },
];