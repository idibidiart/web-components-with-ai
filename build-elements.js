const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

  const files =[
    './dist/elements-build/runtime.js',
    './dist/elements-build/main.js'
  ]

  await fs.ensureDir('./dist/elements')

  await concat(files, './dist/elements/chat-widget.js')
  await fs.copy('./src/index-elements.html', './dist/elements/index.html')
  

  await fs.copy('./node_modules/zone.js/dist/zone.js', './dist/elements/zone.js')
 
  await fs.copy('./native-shim.js', './dist/elements/native-shim.js')
  await fs.copy('./custom-elements.min.js', './dist/elements/custom-elements.min.js')

  await fs.copy('./angular-elements-logo.png', './dist/elements/angular-elements-logo.png')

  console.info('Elements created successfully!')

})()
