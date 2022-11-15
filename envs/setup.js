const { existsSync, copyFile } = require("fs");

const fileName = process.env.sourceFile;
const source = `${__dirname}/.env.${fileName}`;
const replaceFile = `${__dirname}/../.env`;



console.clear();
console.log("existsSync(source):: ", existsSync(source))
if(existsSync(source)) {
    copyFile(source, replaceFile, (err) => {
        if(err) throw err;
        console.log(`${source} was copied to ${replaceFile}`)
    })
} else {
    console.error(`No configs found for "${source}"`);
    process.exit(1);
}
