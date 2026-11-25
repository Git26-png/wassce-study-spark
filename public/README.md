# public/ — files served straight from your site address

Everything in this folder is copied to the root of your published site, unchanged.
So a file saved here as `public/ads.txt` is reachable at `https://your-site.com/ads.txt`.

## Adding your AdSense ads.txt later

1. Open this folder and edit `ads.txt` (it already exists with instructions inside).
2. Paste your one AdSense line, for example:
   `google.com, pub-000000000000000, DIRECT, f08c47fec0942fa0`
3. Save the file and re-publish the app.
4. Visit `https://your-site.com/ads.txt` in a browser to confirm it opens.

## Other files you may want to drop in here

- `ads.txt` — required by Google AdSense (already here)
- `app-ads.txt` — only needed if you also run a mobile app
- `sitemap.xml` — helps Google find your pages
- `favicon.ico` — the browser tab icon (already here)

Do not put these files inside `src/` — only this `public/` folder is served at the
site root, and `ads.txt` must sit at the root for Google to find it.
