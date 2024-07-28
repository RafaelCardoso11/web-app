import fs from 'fs-extra';
import path from 'path';

export function createProject(projectName, template) {
  const projectPath = path.join(process.cwd(), projectName);
  const templatePath = path.join(__dirname, '../templates', template);
  try {
    fs.mkdirSync(projectPath);
    fs.copySync(templatePath, projectPath);
    console.log(`Projeto ${projectName} criado com sucesso usando o template ${template}!`);
  } catch (err) {
    console.error(`Erro ao criar o projeto: ${err.message}`);
  }
}

