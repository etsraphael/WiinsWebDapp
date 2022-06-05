const { exec } = require('child_process');
const fs = require('fs');
const { ncp } = require('ncp');
const path = require('path');

const pexec = cmd =>
  new Promise((res, rej) => {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        rej(stderr);
        return;
      }
      return res(stdout);
    });
  });

const pcopy = package =>
  new Promise((res, rej) => {
    const rootPath = path.resolve(__dirname, '..');

    const assetsPath = path.resolve(
      rootPath,
      'projects',
      package,
      'src',
      'assets'
    );

    if (fs.existsSync(assetsPath)) {
      const distPath = path.resolve(rootPath, 'dist', package, 'assets');
      ncp(assetsPath, distPath, function (err) {
        if (err) {
          return rej(err);
        }
        res(`Copied ${package} assets`);
      });
    }
  });

module.exports = {
  pcopy,
  pexec,
};
