const path = require('path');
const serverPath = path.join(__dirname, './.next/server');

module.exports = () => {
  try {
    const pagesManifest = require(path.join(serverPath, 'pages-manifest.json'));

    Object.values(pagesManifest).forEach((dep) => {
      if (path.extname(dep) !== '.js') {
        return;
      }

      console.log('preimport ', dep);
      require(path.join(serverPath, dep));
    });
  } catch (e) {}
}