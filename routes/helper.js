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

const writeToFile = (destination, content) =>
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
        err ? console.error(err) : console.info(`\nData written to ${destination}`)
    );

/**
 * Function to read data from a given file & append content.
 * @param {object} content the content you want to append to the file
 * @param {string} file the path to the file you want to save to.
 * @returns {void} Nothing
 */

const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parseData = JSON.parse(data);
            parsedData.push(content);
            writeToFile(file, parsedData);
        }
    });
};

module.exports = { readFromFile, writeToFile, readAndAppend };