#!/usr/bin/env node

import { Command } from "commander";
import { createProject } from "../lib/create-project";

const program = new Command();

program
  .version("1.0.0")
  .description("CLI para gerar projetos NestJS + Next.js")
  .argument("<project-name>", "Nome do projeto")
  .action((projectName) => {
    createProject(projectName);
  });

program.parse(process.argv);
