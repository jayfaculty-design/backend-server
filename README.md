# Simple HTTP Server with HTML Rendering

This is a simple HTTP server built using Node.js that serves HTML files based on user requests. The server handles routing and displays the appropriate HTML files. If a file is not found, a custom 404 error page is shown.

## Features
- Serves HTML files (e.g., `index.html`, `about.html`, `contact.html`).
- Handles requests to the root (`/`) by serving `index.html`.
- Displays a custom 404 error page for undefined routes.
- Automatically appends `.html` extension to routes without it (e.g., `/about` will serve `about.html`).



