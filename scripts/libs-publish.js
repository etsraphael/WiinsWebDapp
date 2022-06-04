const { readdir } = require('fs-extra');
const { pexec } = require('./utils');

const publishLibs = async dirs => {
  for (let dir of dirs) {
    await pexec(`npm publish dist/${dir}`).then(
      () => console.log(`Published @wiins/${dir}`),
      () => console.log(`Failed to publish @wiins/${dir}`)
    );
  }
};

(async () => {
  const dirs = await readdir('./projects');
  await publishLibs(dirs);
})();
