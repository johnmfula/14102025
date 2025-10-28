const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const GA4_ID = 'G-DR15XZEWRN';

const snippet = [
  '    <!-- Google Analytics 4 (GA4) tag -->',
  `    <script async src="https://www.googletagmanager.com/gtag/js?id=${GA4_ID}"></script>`,
  '    <script>',
  '      window.dataLayer = window.dataLayer || [];',
  '      function gtag(){dataLayer.push(arguments);}',
  "      gtag('js', new Date());",
  '',
  `      gtag('config', '${GA4_ID}');`,
  '    </script>',
  '    <!-- End Google Analytics 4 (GA4) tag -->',
  ''
].join('\n');

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, files);
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.html')) {
      files.push(full);
    }
  }
  return files;
}

function alreadyHasGA4(html) {
  return html.includes(GA4_ID);
}

function insertAfterFirstGoogleTag(html) {
  const markerRegex = /<\/script>\s*<!--\s*Google tag \(gtag\.js\)\s*-->/i;
  if (markerRegex.test(html)) {
    return html.replace(markerRegex, `</script>\n${snippet}    <!-- Google tag (gtag.js) -->`);
  }
  return null;
}

function insertBeforeHeadClose(html) {
  const headClose = /<\/head>/i;
  if (headClose.test(html)) {
    return html.replace(headClose, `${snippet}</head>`);
  }
  return null;
}

const htmlFiles = walk(ROOT);
let updated = 0;
for (const file of htmlFiles) {
  const original = fs.readFileSync(file, 'utf8');
  if (alreadyHasGA4(original)) continue;

  let modified = insertAfterFirstGoogleTag(original);
  if (!modified) {
    modified = insertBeforeHeadClose(original);
  }
  if (modified && modified !== original) {
    fs.writeFileSync(file, modified, 'utf8');
    updated++;
    process.stdout.write(`Updated: ${path.relative(ROOT, file)}\n`);
  }
}

process.stdout.write(`Done. Updated ${updated} file(s).\n`);


