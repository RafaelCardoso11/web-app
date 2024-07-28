#!/usr/bin/env node

import { Command } from "commander";
import { createProject } from "../lib/create-project";
import { displayBanner } from "../utils/displayBanner";

const program = new Command();

program
  .version("1.0.0")
  .description("CLI para gerar projetos NestJS + Next.js");

program.hook("preAction", () => {
  displayBanner("PROJECT - PSDIT");
});

program
  .command("create")
  .description("Cria um novo projeto")
  .argument("<project-name>", "Nome do projeto")
  .option("-d, --description <description>", "Descrição do projeto")
  .action((projectName) => createProject(projectName));

program.parse(process.argv);
