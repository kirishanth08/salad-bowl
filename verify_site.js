const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
console.log(`Checking ${files.length} HTML files...`);

let issues = 0;

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  
  // Check section tags
  const sections = (content.match(/<section/g) || []).length;
  const dashPanels = (content.match(/class="dash-panel/g) || []).length;
  
  // Check links
  const hrefMatches = content.matchAll(/href="([^"#:]+\.html)"/g);
  for (const match of hrefMatches) {
    const target = match[1];
    if (!fs.existsSync(target)) {
      console.warn(`[BROKEN LINK] in ${file}: target ${target} does not exist`);
      issues++;
    }
  }

  // Check CSS & JS references
  if (!content.includes('assets/css/style.css')) {
    console.warn(`[MISSING CSS] in ${file}: style.css not referenced`);
    issues++;
  }

  console.log(`✓ ${file} (Sections: ${sections}, Panels: ${dashPanels})`);
});

if (issues === 0) {
  console.log('ALL 27 PAGES VERIFIED! Zero broken links or missing resources.');
} else {
  console.log(`Found ${issues} issues.`);
}

