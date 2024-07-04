import { Logger } from './Logger';
import { LogLevel } from './LogLevel';
import { LoggerConfig } from './LoggerConfig';

const config: LoggerConfig = { logLevel: LogLevel.VERBOSE };
const logger = Logger.getInstance(config);

logger.verbose("This is a verbose message");
logger.info("This is an info message");
logger.warning("This is a warning message");
logger.error("This is an error message");
