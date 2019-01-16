const gm = require('gm').subClass({ imageMagick: true });

module.exports = (imagePath, x, y) =>
  new Promise((resolve, reject) =>
    gm(imagePath)
      .crop(x, y)
      .toBuffer((err, buffer) => {
      	gm(buffer)
      	.identify('%[hex:s]', (error, imageMagickColor) => {
	        if (error) return reject(error);
	        console.log(imageMagickColor);
	        return resolve(`#${imageMagickColor}`);
	      })
      })
  );
