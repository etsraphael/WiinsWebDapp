const path = require('path');
const {
  pathExistsSync,
  copySync,
  ensureDirSync,
  readJsonSync,
  removeSync,
  mkdirsSync,
  existsSync,
  readdirSync,
} = require('fs-extra');
const chokidar = require('chokidar');
const { pexec } = require('./utils');

function Linker() {
  this.root = './';

  // syncs files on save
  this.syncFile = async file => {
    console.log('file changed: ', file);
    const targetRoot = path.resolve(this.root, 'dist');
    const source = path.resolve(file);
    const target = path.resolve(
      targetRoot,
      file.replace('projects/', '').replace('src/', '')
    );

    if (!path.dirname(target)) {
      ensureDirSync(path.dirname(target));
    }
    try {
      copySync(source, target);
    } catch (ex) {
      console.error(ex);
    }
  };

  // syncs all files
  this.syncAll = async () => {
    console.log('Copying all libraries...');
    let projects = readdirSync('./projects');
    projects = projects.filter(x => x !== '.DS_Store');
    for (let project of projects) {
      await pexec(`ng build ${project}`).then(
        () => console.log(`${project} library added`),
        () => console.log(`${project} library failed`)
      );
    }
  };

  // clean link destination
  this.cleanLink = () => {
    console.log('Cleaning sym_links...');
    const mainBuild = 'WiinsWebDapp';
    let libs = readdirSync('./dist');
    libs = libs.filter(x => x !== mainBuild);
    for (let lib of libs) {
      const targetRoot = path.resolve(this.root, 'dist', lib);
      if (pathExistsSync(targetRoot)) {
        removeSync(targetRoot);
      }
    }
  };

  // config watchers
  this.setupWatcher = () => {
    console.log('Watching project source');
    const watcher = chokidar.watch('./projects', {
      ignored: /(^|[\/\\])\../, // ignore dotfiles
      persistent: true,
      interval: 1000,
    });

    watcher.on('change', path => {
      this.syncFile(path);
    });
  };

  // set up linker
  this.setupLink = () => {
    try {
      this.cleanLink();
      this.syncAll();
      // this.setupWatcher();
    } catch (err) {
      console.error(err);
    }
  };
}

const linker = new Linker();
linker.setupLink();
