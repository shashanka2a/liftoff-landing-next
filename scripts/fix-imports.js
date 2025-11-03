const fs = require('fs');
const path = require('path');

const exts = new Set(['.ts', '.tsx', '.js', '.jsx']);
const dir = path.join(__dirname, '..', 'components');

const patterns = [
  /(@radix-ui\/[A-Za-z0-9-]+)@[^"']+/g,
  /(lucide-react)@[^"']+/g,
  /(cmdk)@[^"']+/g,
  /(embla-carousel-react)@[^"']+/g,
  /(react-day-picker)@[^"']+/g,
  /(recharts)@[^"']+/g,
  /(react-hook-form)@[^"']+/g,
  /(vaul)@[^"']+/g,
  /(input-otp)@[^"']+/g,
  /(react-resizable-panels)@[^"']+/g,
  /(sonner)@[^"']+/g,
  /(next-themes)@[^"']+/g,
  /(class-variance-authority)@[^"']+/g,
];

function walk(current) {
  const entries = fs.readdirSync(current, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(current, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (exts.has(path.extname(entry.name))) fixFile(full);
  }
}

function fixFile(file) {
  let src = fs.readFileSync(file, 'utf8');
  let changed = false;
  // Only operate on import specifiers
  const importOnly = src
    .split('\n')
    .map((line) => {
      if (!line.includes('from ') && !line.trim().startsWith('import')) return line;
      let nextLine = line;
      for (const re of patterns) {
        nextLine = nextLine.replace(re, '$1');
      }
      return nextLine;
    })
    .join('\n');
  if (importOnly !== src) {
    changed = true;
    src = importOnly;
  }
  // Extra generic cleanup: any package@version to package inside quotes
  const generic = src.replace(/(["'])((?:@?)[A-Za-z0-9_.\-\/]+)@[^"']+(\1)/g, '$1$2$3');
  if (generic !== src) {
    if (next !== src) {
      // no-op
    }
    changed = true;
    src = generic;
  }
  if (changed) {
    fs.writeFileSync(file, src, 'utf8');
    console.log('Fixed imports in', file);
  }
}

walk(dir);

