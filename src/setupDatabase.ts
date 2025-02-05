import mongoose from 'mongoose';
import { config } from '@root/config';
import Logger from 'bunyan';

const log: Logger = config.createLogger('Database');

export default () => {
  const connect = () => {
    mongoose
      .connect(`${config.DATABASE_URL}`)
      .then(() => {
        log.info('Database connection established');
      })
      .catch((error) => {
        log.error('Database connection error ' + error);
        return process.exit(1);
      });
  };

  connect();
  mongoose.connection.on('disconnected', connect);
};
