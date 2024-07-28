import ejs from "ejs";
import fs from "fs-extra";

export const renderEJSFile = async (
  filePath: string,
  context: object,
  outputPath: string
) => {
  try {
    const result = await ejs.renderFile(filePath, context);
    await fs.outputFile(outputPath, result);
  } catch (error) {
    console.error(`Erro ao renderizar o arquivo ${filePath}: ${error}`);
    throw error;
  }
};
