const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

imagemin(['public/guitars/*.png'], {
  destination: 'public/guitars/',
  plugins: [imageminWebp({quality: 90})]
}).then(() => {
  console.log('Completed guitars');
});

imagemin(['src/img/*.png'], {
  destination: 'src/img/',
  plugins: [imageminWebp({quality: 90})]
}).then(() => {
  console.log('Completed');
});
