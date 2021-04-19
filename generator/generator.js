/* eslint-disable */
const inquirer = require('inquirer');
const fs = require('fs');

const QUESTIONS_STRINGS = {
    containerName: 'container-name'
};

const QUESTIONS = [
    {
        name: QUESTIONS_STRINGS.containerName,
        type: 'string',
    }
];

inquirer.prompt(QUESTIONS).then(answers => {
    const containerName = answers[QUESTIONS_STRINGS.containerName];
    const templatePath = `${__dirname}/template`;
    const newFilesPath = `${process.cwd()}/src/containers/${containerName}Container`;
    fs.mkdirSync(newFilesPath);
    createDirectoryContents(templatePath, newFilesPath, containerName);
});

function createDirectoryContents(templatePath, newFilesPath, containerName) {
    const filesToCreate = fs.readdirSync(templatePath);
    filesToCreate.forEach(file => {
        const templateFilePath = `${templatePath}/${file}`;

        const stats = fs.statSync(templateFilePath);

        if (stats.isDirectory()) {
            fs.mkdirSync(`${newFilesPath}/${file}`);
            createDirectoryContents(
                templateFilePath,
                `${newFilesPath}/${file}`,
                containerName
            );
        }

        if (stats.isFile()) {
            let templateFilePathTemp = templateFilePath;
            console.log('actions path: ' + templateFilePathTemp);
            writeFile(file, containerName, templateFilePathTemp, newFilesPath);
        }
    });
}

/**
 * Write file of template
 * @param file
 * @param containerName
 * @param templateFilePath
 * @param newFilesPath
 */
function writeFile(file, containerName, templateFilePath, newFilesPath) {
    let filename = file;
    if (file === 'VIEW_NAME.tsx') {
        filename = `${containerName}.tsx`;
    }
    const contents = fs.readFileSync(templateFilePath, 'utf8');

    const writePath = `${newFilesPath}/${filename}`;
    let replacedContents = contents.replace(
        new RegExp(/(VIEW_NAME)+/g),
        containerName,
    );
    replacedContents = replacedContents.replace(
        new RegExp(/(VIEW_INSIDE_NAME)+/g),
        `${toUpperCaseFirstChar(containerName)}`,
    );
    fs.writeFileSync(writePath, replacedContents, 'utf8');
}

/**
 * Get upper cased first character word
 * @param word
 */
const toUpperCaseFirstChar = word => {
    if (word && typeof word === 'string' && word.length > 0) {
        return `${word[0].toUpperCase()}${word.slice(1, word.length)}`;
    }
    return word;
};
