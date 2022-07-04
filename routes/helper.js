const fs = require('fs');
const util = require('util');

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);
/**
 * Function to write data to the JSON file given a destination and some content.
 * @param {string} destinations the file you want to write to.
 * @param {object} content the content you want to write the file.
 * @returns {void} Nothing
 */

