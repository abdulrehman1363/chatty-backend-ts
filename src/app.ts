import express, { Express } from 'express';
import { chattyServer } from '@root/setupServer';
import databaseConnection from '@root/setupDatabase';
import { config } from '@root/config';

class Application {
  public initialize(): void {
    this.loadConfig();
    databaseConnection();
    const app: Express = express();
    const server: chattyServer = new chattyServer(app);
    server.start();
  }

  public loadConfig(): void {
    config.validateConfig();
  }
}

const application: Application = new Application();
application.initialize();
