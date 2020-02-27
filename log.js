// import { readFileSync } from 'fs';
const fs = require('fs');

const { readFileSync } = fs;

const stringFromFile = path => {
    return readFileSync(path, 'utf-8');
};

const dd = stringFromFile('./CHANGELOG.md');
// const demo = '::set-output name=changelog::123';
const demo = `::set-output name=changelog::${dd}`;

// export default demo;

console.log(demo);
