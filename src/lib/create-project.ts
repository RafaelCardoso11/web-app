import fs from "fs-extra";
import path from "path";
import { renderEJSFile } from "../utils/renderEJSFile";

const ejsFiles = ["package.json", "README.md"];

export const createProject = async (projectName: string) => {

  
  const projectPath = path.join(process.cwd(), projectName);
  const templatePath = path.join(__dirname, "../templates", "app");

  try {
    await fs.ensureDir(projectPath);
    await fs.copy(templatePath, projectPath);

    const filesWithEjs = ejsFiles.map(async (file) => {
      const fullPath = path.join(templatePath, file);
      const newFilePath = path.join(projectPath, file);
      await renderEJSFile(fullPath, { PROJECT_NAME: projectName }, newFilePath);
    });

    await Promise.all(filesWithEjs);

    console.log("✨ Projeto criado com sucesso! ✨");

  } catch (error) {
    console.error(`Erro ao criar o projeto: ${error}`);
  }
};
