import fs from "fs-extra";
import path from "path";

export function createProject(projectName: string) {
  const projectPath = path.join(process.cwd(), projectName);
  const templatePath = path.join(__dirname, "../templates", "app");
  try {
    fs.mkdirSync(projectPath);
    fs.copySync(templatePath, projectPath);
    console.log(`Projeto ${projectName} criado com sucesso!`);
  } catch (err) {
    console.error(`Erro ao criar o projeto: ${err}`);
  }
}
