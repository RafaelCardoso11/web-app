import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import next from 'next';
import { parse } from 'url';
import { Request, Response } from 'express';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const dev = process.env.NODE_ENV !== 'production';
  const PORT = 3000;

  const nextApp = next({ dev });
  const handle = nextApp.getRequestHandler();

  await nextApp.prepare().then(async () => {
    const app = await NestFactory.create(AppModule);

    app.use((req: Request, res: Response) => {
      const parsedUrl = parse(req.url, true);

      handle(req, res, parsedUrl);
    });

    await app.listen(PORT).finally(() => {
      Logger.log(`✨ Projeto PSDIT rodando em http://localhost:${PORT} ✨`);
    });
  });
}
bootstrap();
