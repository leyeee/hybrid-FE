const path = require('path');
const fs = require('fs');

const appPath = path.resolve(__dirname, '../apps/');

const dirs = fs.readdirSync(appPath);

module.exports = function() {
    const entry = Object.create(null);
    const output = Object.create(null);

    dirs.forEach(dir => {
        const mainPath = `${appPath}/${dir}/src/main.js`;
        if (fs.existsSync(mainPath)) {
            entry[dir] = path.resolve(mainPath);
        }
    });
    return entry;
};
