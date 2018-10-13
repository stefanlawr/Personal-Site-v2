const fs = require('fs-extra');

// create the dist/assets directory
fs.emptyDirSync('./dist/assets');

fs.copy('./assets', './dist/assets', (err) => {
  if (err) {
    console.log('Error while copying assets folder');
    console.log(err);
  }
})
