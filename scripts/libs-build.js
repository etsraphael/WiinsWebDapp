const fs = require('fs');
const { pcopy, pexec } = require('./utils');

const reduceLibraries = (prev, [name, config]) =>
  config.projectType === 'library' ? prev.concat(name) : prev;

const getLibraries = projects =>
  Object.entries(projects).reduce(reduceLibraries, []);

const invokeBuild = () => {
  fs.readFile('angular.json', 'utf8', async (err, data) => {
    if (err) {
      console.log('Could not read angular.json');
      throw err;
    }

    const config = JSON.parse(data);
    const toBuild = getLibraries(config.projects);
    for (let i = 0; i < toBuild.length; i++) {
      const item = toBuild[i];

      await pexec(`ng build ${item}`).then(
        () => {
          console.log(`Building ${item}...success`);

          pcopy(item)
            .then(res => console.log(res))
            .catch(err => {
              console.log(`${item} assets failed to copy.`);
              console.error(err);
            });
        },
        error => {
          console.log(`Building ${item}...failed:`);
          console.error(error);
          process.exit(1);
        }
      );
    }
  });
};

invokeBuild();
