module.exports = {
    // Type check TypeScript files
    '**/*.(js|jsx)': () => 'yarn jsc --noEmit',
  
    // Lint & Prettify TS and JS files
    '**/*.(js|jsx)': filenames => [
      `yarn eslint ${filenames.join(' ')}`
      //`yarn prettier --write ${filenames.join(' ')}`
    ],
  
    // Prettify only Markdown and JSON files
    //'**/*.(md|json)': filenames => `yarn prettier --write ${filenames.join(' ')}`
  };