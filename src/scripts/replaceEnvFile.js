const fs = require('fs');

function replaceEnvFile(source, replace) {
  if (fs.existsSync(source)) {
    const rootDir = process.cwd();
    const sourceFile = `${rootDir}/${source}`;
    const replaceFile = `${rootDir}/${replace}`;
    let contents = fs.readFileSync(sourceFile, 'utf8');

    fs.writeFileSync(replaceFile, contents, 'utf8');
    return true;
  }
  console.log(`File "${source}" not found.`);
  process.exit(1);
}

// function replaceEnvFile(source, destination) {
//   try {
//     const rootDir = process.cwd();
//     const sourceFile = `${rootDir}/${source}`;
//     const destFile = `${rootDir}/${destination}`;
//     const data = fs.readFileSync(sourceFile, 'utf8');

//     fs.writeFileSync(destFile, data, 'utf8');
//   } catch (error) {
//     console.error(error);
//     process.exit(1); //error to not run next script command
//   }
// }

module.exports = {replaceEnvFile};
