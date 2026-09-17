const fs = require('fs');
if (fs.existsSync('assets/js/presets.js')) {
  const p = fs.readFileSync('assets/js/presets.js', 'utf8');
  const m = p.match(/id:\s*['"]e1_/g);
  console.log('e1_ count in presets.js:', m ? m.length : 0);
}
