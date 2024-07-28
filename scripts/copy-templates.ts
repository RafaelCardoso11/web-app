import fs from 'fs';
import path from 'path';

// Diretórios de origem e destino
const templateDir = path.resolve(__dirname, '../src/templates');
const distDir = path.resolve(__dirname, '../dist/templates');

// Diretórios e arquivos a serem ignorados
const ignoreDirs = ['node_modules', 'dist', '.next'];

// Função para copiar arquivos e diretórios
const copyTemplate = (src: string, dest: string) => {
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    // Ignorar diretórios especificados
    if (ignoreDirs.includes(entry.name)) {
      continue;
    }

    if (entry.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyTemplate(srcPath, destPath);
    } else {
      try {
        fs.copyFileSync(srcPath, destPath);
      } catch (err) {
        console.error(`Erro ao copiar ${srcPath}:`, err);
      }
    }
  }
};

// Cria o diretório de destino
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copia os arquivos
copyTemplate(templateDir, distDir);

console.log('Templates copiados para o diretório dist');
