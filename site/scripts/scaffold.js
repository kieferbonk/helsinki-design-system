const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const chalk = require('chalk');

const exitError = (msg) => {
  console.log(`${chalk.red.bold('Error:')} ${chalk.italic(msg)}`);
  process.exit(1);
};

const logStep = (msg) => console.log(`${chalk.green('✓')} ${msg}`);

const createFolder = (path) => {
  if (fs.existsSync(path)) {
    exitError(`component already exists in ${path}!`);
  }

  fs.mkdirSync(path);
  return path;
};

const createComponentFiles = (templatePath, destination, name, pathName) => {
  const files = fs.readdirSync(templatePath);

  const newFiles = files.map((file) => {
    const sourcePath = `${templatePath}${file}`
    const targetPath = `${destination}/${file}`


    const data = fs.readFileSync(sourcePath, 'utf-8').split('{newComponentPathName}').join(pathName).split('{newComponent}').join(name);

    fs.writeFileSync(targetPath, data);

    return targetPath;
  })

  return newFiles;
}

const appendToComponentsData = (name, pathName) => {
  const newDataObject = {
    name,
    text: "",
    linkboxAriaLabel: `${name} component`,
    linkAriaLabel: `Go to the ${name} component page`,
    href: `/components/${pathName}`,
    imgProps: {
      src: "",
      alt: `An illustration of the ${name} component.`,
      height: 180,
      width: 280
    }
  }

  const json = fs.readFileSync(path.resolve(__dirname, '../src/data/components.json'), 'utf-8');
  const newJson = JSON.parse(json);

  newJson.push(newDataObject);

  const sortData = newJson.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);

  fs.writeFileSync(path.resolve(__dirname, '../src/data/components.json'), JSON.stringify(sortData))
}

const scaffold = async () => {
  const { name } = await inquirer.prompt({ type: 'input', name: 'name', message: `What's the name of your component? (e.g. MyComponent)`, validate: (input) => (input.split(' ').length < 2 ? true : `Invalid component name: ${input}`) })

  const nameSplit = name.split(/(?=[A-Z])/);
  const pathName = nameSplit.join('-').toLowerCase();

  const path = createFolder(`src/docs/components/${pathName}`)
  logStep(`${chalk.bold(`Created folder:`)}\n\t${chalk.italic(path)}`);

  const files = createComponentFiles('.templates/new-component/', path, name, pathName)
  logStep(`${chalk.bold(`Created files:`)}\n\t${chalk.italic(files.join('\n\t'))}`);

  appendToComponentsData(name, pathName);

  logStep(
    `${chalk.bold(`Scaffolding done.`)} Run ${chalk.yellow.italic('yarn start')} to see your component!`,
  );
}

scaffold();
