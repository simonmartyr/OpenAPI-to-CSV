const fs = require('fs');

let inputData = JSON.parse(fs.readFileSync('input/input.json'));
let routes = inputData.paths;
const outputFile = 'output.csv';

fs.writeFileSync(outputFile, 'routes,verbs,name,description\n');
for (const [key, value] of Object.entries(routes)) {
  for (const [verbKey, verbValue] of Object.entries(value)) {
    let description = verbValue.summary.replace(/,/g, '.');
    fs.appendFileSync(
      outputFile,
      `${key},${verbKey},${verbValue.operationId},${description}\n`,
    );
  }
}
