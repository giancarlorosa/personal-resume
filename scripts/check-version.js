const https = require('https');
const currentVersion = require('../package.json').version;

const myArgs = process.argv.slice(2);
const org = myArgs[0];
const repo = myArgs[1];
const branch = myArgs[2] || 'master';
const versionURL = `https://raw.githubusercontent.com/${org}/${repo}/${branch}/package.json`;

// Split version to check major, minor and patch version values.
function splitVersion(version) {
  return version.split('.').map((v) => parseInt(v, 10));
}

// Function used to transform version into an int to easily be compared.
function splitToIntVersion(splittedVersion) {
  const stringVersion = splittedVersion.map((v) => `000${v}`.slice(-3));
  return parseInt(stringVersion.join(''), 10);
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
  const splittedOrigVersion = splitVersion(orig);
  const splittedCurrVersion = splitVersion(curr);
  const intOrigVersion = splitToIntVersion(splittedOrigVersion);
  const intCurrVersion = splitToIntVersion(splittedCurrVersion);

  if (intOrigVersion > intCurrVersion) {
    throwProcessError(
      `Current version (${curr}) is smaller than the version of ${branch} (${orig}).`
    );
  }

  if (intOrigVersion === intCurrVersion) {
    throwProcessError(
      `Current version (${curr}) is the same as ${branch} (${orig}).`
    );
  }

  if (
    splittedCurrVersion[0] > splittedOrigVersion[0] &&
    (splittedCurrVersion[1] !== 0 || splittedCurrVersion[2] !== 0)
  ) {
    throwProcessError(
      `Current version (${curr}) was set incorrectly.\nTo increment the MAJOR version you MUST set MINOR and PATCH version to ZERO.\nE.g. ${splittedCurrVersion[0]}.0.0`
    );
  }

  if (
    splittedCurrVersion[1] > splittedOrigVersion[1] &&
    splittedCurrVersion[2] !== 0
  ) {
    throwProcessError(
      `Current version (${curr}) was set incorrectly.\nTo increment the MINOR version you MUST set PATCH version to ZERO.\nE.g. ${splittedCurrVersion[0]}.${splittedCurrVersion[1]}.0`
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
