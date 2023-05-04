const https = require('https');
const currentVersion = require('../package.json').version;

const myArgs = process.argv.slice(2);
const org = myArgs[0];
const repo = myArgs[1];
const branch = myArgs[2] || 'master';
const versionURL = `https://raw.githubusercontent.com/${org}/${repo}/${branch}/package.json`;

function splitVersion(version) {
  return version.split('.').map((v) => parseInt(v, 10));
}

function throwProcessError(message) {
  // eslint-disable-next-line no-console
  console.error(`Error: ${message}`);
  process.exit(1);
}

function throwMessage(message) {
  // eslint-disable-next-line no-console
  console.log(message);
}

function compareVersions(orig, curr) {
  const origVersion = splitVersion(orig);
  const currVersion = splitVersion(curr);
  let equalVersion = 0;

  for (let i = 0; i < origVersion.length; i += 1) {
    if (origVersion[i] > currVersion[i]) {
      throwProcessError(
        `Current version (${curr}) is smaller than the version of ${branch} (${orig}).`
      );
    } else if (origVersion[i] === currVersion[i]) {
      equalVersion += 1;
    }
  }

  if (
    currVersion[0] > origVersion[0] &&
    (currVersion[1] !== 0 || currVersion[2] !== 0)
  ) {
    throwProcessError(
      `Current version (${curr}) was set incorrectly.\nTo increment the MAJOR version you MUST set MINOR and PATCH version to ZERO.\nE.g. ${currVersion[0]}.0.0`
    );
  }

  if (currVersion[1] > origVersion[1] && currVersion[2] !== 0) {
    throwProcessError(
      `Current version (${curr}) was set incorrectly.\nTo increment the MINOR version you MUST set PATCH version to ZERO.\nE.g. ${currVersion[0]}.${currVersion[1]}.0`
    );
  }

  if (equalVersion === 3) {
    throwProcessError(
      `Current version (${curr}) is the same as ${branch} (${orig}).`
    );
  }

  throwMessage(`Version checked: ${curr}`);
  return true;
}

https
  .get(versionURL, (resp) => {
    let data = '';

    resp.on('data', (chunk) => {
      data += chunk;
    });

    resp.on('end', () => {
      const masterVersion = JSON.parse(data).version;
      compareVersions(masterVersion, currentVersion);
    });
  })
  .on('error', (err) => {
    throwProcessError(err.message);
  });
