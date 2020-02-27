// import { readFileSync } from 'fs';
const fs = require('fs');

const { readFileSync } = fs;

const stringFromFile = path => {
    return readFileSync(path, 'utf-8');
};

let dd = stringFromFile('./CHANGELOG.md');
// # changelog="${changelog//'%'/'%25'}"
// # changelog="${changelog//$'\n'/'%0A'}"
// # changelog="${changelog//$'\r'/'%0D'}"
dd = dd.replace(/%/g, '%25');
dd = dd.replace(/\n/g, '%0A');
dd = dd.replace(/\r/g, '%0D');
// const demo = '::set-output name=changelog::123';
const demo = `::set-output name=changelog::${dd}`;

// export default demo;

console.log(demo);
