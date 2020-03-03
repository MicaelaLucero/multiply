const fs = require("fs");
const colors = require('colors')

let listTable = (base, limit) => {

  console.log(`====== Table of ${base} =========`.red)
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`The value entered ${base} is not a number`);
      return;
    }

    let data = "";

    for (i = 0; i <= limit; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tables/table-${base}.txt`, data, err => {
      if (err) reject(err);
      else resolve(`table-${base}.txt`);
    });
  });
};

createFile = (base, limit = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`The value entered ${base} is not a number`);
      return;
    }

    let data = "";

    for (i = 0; i <= limit; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tables/table-${base}.txt`, data, err => {
      if (err) reject(err);
      else resolve(`table-${base}.txt`);
    });
  });
};

module.exports = {
  createFile, listTable
};
