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
// eslint-disable-next-line prefer-destructuring
// dd = dd.match(/##(\S*)##/);

// const demo2 = dd.match(/(\S*)0.4.0/);

// dd = dd.replace(/%/g, '%25');
// dd = dd.replace(/\n/g, '%0A');
// dd = dd.replace(/\r/g, '%0D');

// export default demo;

// console.log(demo2[0]);
// console.log(demo);

// const str = 'iid0000ffr';

// const substr = str.match(/(iid=?)(\S*)(?=ffr)/);
// const substr = str.match(/(##=?)(\S*)(?=ffr)/);
// const substr = dd.match(/(##=?)(\S*)/);

// console.log(substr);

// console.log(dd.match(regExp)); // "It's a lon"
// console.log(str.match(regExp)[1]); // "It's a lon"

// console.log(dd.match(/##.*#/)); // "It's a lon"
// console.log('## 0.4.1  ddedede  ## 0.4.0 2232'.match(/##.*##/g)); // "It's a lon"
// dd = dd.replace(/\n/g, '-n-');

// console.log('dd', dd);
// console.log(dd.match(/.*##$/g)); // "It's a lon"
// dd = dd.replace(/-n-/g, '\n');
// console.log('d', dd);

// console.log(
//     `## 0.4.1
//         ddedede
//     ## 0.4.0
//         2232`.match(/##.*##/g)
// ); // "It's a lon"

// const str2 = '1 plus 2 equal 3';
// console.log(str2.match(/\d+/g));

// const regexWithWildcard = /.+##/g;
// const regexWithWildcard = /.+##/gm;
const regexWithWildcard = /[^##]+/g;
// const testString = 'cats BAT cupcake fAT mat dog';
// const testString = 'ee3dedde ## 0.4.1  ddedede  ## 0.4.0 dd2232';
const allMatchingWords = dd.match(regexWithWildcard);
dd = `${allMatchingWords[0]}`;
dd = dd.replace(/%/g, '%25');
dd = dd.replace(/\n/g, '%0A');
dd = dd.replace(/\r/g, '%0D');

const demo = `::set-output name=changelog::${dd}`;
console.log(demo);
