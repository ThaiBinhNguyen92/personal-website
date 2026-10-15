// Extra info shown in a tooltip when a highlighted word is hovered/tapped.
export type HighlightInfo = {
  name: string; // Title shown at the top of the tooltip
  image?: { src: string; alt: string }; // Optional image under the title (file lives in /public)
  facts?: { label: string; value: string }[]; // Optional list of "label: value" lines
};

// A word inside a sentence that gets a tooltip.
export type Highlight = {
  match: string; // Must appear exactly as written in the item's `text`
  info: HighlightInfo;
};

// Shape of one line in the "about me" list.
export type AboutItem = {
  id: string;    // Unique key, used by React and to track which line is open
  title: string; // Text shown on the clickable line
  text: string;  // Text revealed when the line is opened
  highlights?: Highlight[]; // Optional: words inside `text` that get a tooltip (one line can have several)
};

// The actual content. To add a new line, add a new object to this array.
// The UI reads from here, so you never need to touch the component for content changes.
export const aboutItems: AboutItem[] = [
  {
    id: "about",
    title: "About me",
    text: "I am from Quang Ngai city, Vietnam.",
    highlights: [
      {
        match: "Quang Ngai city",
        info: {
          name: "Quang Ngai, Vietnam",
          facts: [
            { label: "Location", value: "Central Coast" },
            { label: "Famous for", value: "Ly Son Island, Tra Khuc River" },
            { label: "Economy", value: "Dung Quat Economic Zone" },
          ],
        },
      },
    ],
  },
  {
    id: "career",
    title: "Career",
    text: "I graduated from WSU with a degree in Computer Science.",
    highlights: [
      {
        match: "WSU",
        info: {
          name: "Washington State University",
          facts: [
            { label: "Location", value: "Pullman, Washington, United States" },
            { label: "Founded", value: "1890" },
            { label: "Mascot", value: "Butch the Cougar" },
          ],
        },
      },
    ],
  },
  {
    // Line 3: hobbies. Two tooltip words, each showing a title and an image.
    id: "hobbies",
    title: "Hobbies",
    text: "I enjoy playing video games and making music.",
    highlights: [
      {
        match: "video games",
        info: {
          name: "Nintendo Switch",
          image: { src: "/images/mario.jpg", alt: "Mario on Nintendo Switch" },
        },
      },
      {
        match: "music",
        info: {
          name: "Guitar",
          image: { src: "/images/guitar.jpg", alt: "My guitar" },
        },
      },
    ],
  },
];
