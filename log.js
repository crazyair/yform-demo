const fs = require('fs');

const { readFileSync } = fs;

const stringFromFile = path => {
    return readFileSync(path, 'utf-8');
};

const text = stringFromFile('./CHANGELOG.md');
const versionLogs = text.split('---\n\n')[1];
// console.log(versionLogs);
// console.log(text.split('---\n\n')[1]);

const allMatchingWords = versionLogs.match(/[^##]+/g);
let changelog = allMatchingWords[0];
changelog = changelog.replace(/%/g, '%25');
changelog = changelog.replace(/\n/g, '%0A');
changelog = changelog.replace(/\r/g, '%0D');

const demo = `::set-output name=changelog::${changelog}`;
// eslint-disable-next-line no-console
console.log(demo);
