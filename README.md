# Monroe County Foster Parents

A static resource directory for foster and kinship families in Monroe County, NY.
Open `index.html` directly in a browser. No build, dependencies, or server required.

## Pages

- `index.html`: local resources, Foster Closet links, and useful contacts.
- `organize-family-information.html` and `using-the-foster-closet.html`: unused starter articles, retained for reference and excluded from navigation and the sitemap.
- `request-closet/index.html` and `donate-closet/index.html`: forms that compose an email in the visitor’s email app. Visitors must send the email themselves.
- `style.css`: shared responsive styles using system fonts.

## Add an article

Copy an existing article page, keeping the shared navigation and article structure. Update its title, description, canonical URL, category, reading time, and content. The guides section is currently removed. When ready, add it back to `index.html`, link it from navigation, and add published article URLs to `sitemap.xml`.

The directory’s existing provider details and contact information have not been reverified as part of the visual redesign.

## URLs

Published forms use `/request-closet/` and `/donate-closet/`, served from each directory’s `index.html`. Navigation and the sitemap use those clean URLs. The old root-level `.html` files are compatibility redirects (HTML redirects, not HTTP 301 responses).

Continue opening the root `index.html` directly for local previews. `navigation.js` resolves directory links to explicit index files only under `file://`; hosted navigation needs no JavaScript. Google’s verification HTML file must retain its original name.
