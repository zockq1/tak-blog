import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import config from "config";
import cookieParser from "cookie-parser";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const serverConfig = config.get("server");
  const port = serverConfig.port;
  app.use(cookieParser());
  app.enableCors({
    origin: true,
    credentials: true,
  });
  await app.listen(port);
  Logger.log(`Application running on port ${port}`);
}
bootstrap();
