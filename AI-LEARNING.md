# AI Learning

## Git and GitHub

- Git is a version control system that runs locally.
- GitHub hosts Git repositories online.
- I learned how to configure Git user name and email.
- I connected my local repository to a GitHub remote.
- I used `git push -u origin main` to push my local `main` branch to GitHub.
- Git Credential Manager handles authentication with GitHub.
- "M" next to a file in VS Code means it is modified but not committed yet.

## Next.js

- Next.js is the framework that organizes and runs this project.
- I understand the purpose of the main files and folders: `page.tsx`, `layout.tsx`, `globals.css`, `package.json`, `tsconfig.json`, `next.config.ts`, `public`, and `node_modules`.
- The App Router uses the `app` folder for routes. Data and reusable components live outside it, in `content/` and `components/`.
- `npm run dev` runs the site locally at http://localhost:3000.

## Vercel

- Vercel is a hosting platform made by the creators of Next.js.
- I imported my GitHub repo into Vercel and it detected Next.js automatically.
- Vercel only deploys code that is pushed to GitHub, not uncommitted changes on my machine.
- Every push to `main` triggers a new production deployment automatically.
- Production = the public site built from `main`. Preview = a separate URL for each branch or pull request.
- If a build fails, the Build Logs in the Deployments tab show the error.

## Tailwind CSS

- `flex items-center justify-center` centers content horizontally and vertically.
- `grid sm:grid-cols-3` makes 3 equal columns on wider screens; on phones they stack.
- Tailwind is mobile-first: classes without a prefix apply to all screens, `sm:` applies from small screens up.

## TypeScript and React

- `.tsx` files contain JSX (HTML-like tags); `.ts` files contain only data or logic.
- A `type` describes the shape of data, so the editor warns me if content is missing a field.
- Keeping content in `src/content/about.ts` separates data from UI: I add a new line by editing the array, not the component.
- `useState` stores a value that can change; when it changes, React re-renders the component to show the new state.
- `"use client"` is needed when a component uses `useState` or click/hover events, because those only run in the browser.
- Storing one `openId` instead of a true/false per line guarantees only one line is open at a time.
- Phones have no hover, so the place tooltip opens on hover for a mouse and on tap for touch.
- Conditional rendering (`{isOpen && <div>...</div>}`) means the element only exists in the page when the condition is true. This is how the detail and the tooltip appear and disappear.
- A popup is positioned with `relative` on the parent and `absolute top-full` on the popup, so it sits right under the word instead of pushing other content down.
- Because the UI reads from the `aboutItems` array, adding a new line (Career) only needed new data, no component changes.
- Refactoring = renaming or restructuring code to make it clearer without changing what it does. In VS Code, F2 renames a variable everywhere it is used.

## For the final review
- An AI suggestion I rejected (and why):
- Something AI got wrong:
- My hardest problem:
- The most interesting thing I learned: