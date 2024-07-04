## Logger Class Details

### Constructor

The constructor is private to enforce the Singleton pattern. It initializes the logger with a specified log level.

### Methods

-   `verbose(message: string): void` - Logs verbose messages.
-   `info(message: string): void` - Logs informational messages.
-   `warning(message: string): void` - Logs warning messages.
-   `error(message: string): void` - Logs error messages.
-   `logToFile(filePath: string, buffer: string): void` - Placeholder method for future file logging.

### Usage

-   `Logger.getInstance(config: LoggerConfig): Logger` - Retrieves the single instance of the Logger class.

```js
import { Logger } from "./Logger";
import { LogLevel } from "./LogLevel";
import { LoggerConfig } from "./LoggerConfig";

const config: LoggerConfig = { logLevel: LogLevel.VERBOSE };
const logger = Logger.getInstance(config);

logger.verbose("This is a verbose message");
logger.info("This is an info message");
logger.warning("This is a warning message");
logger.error("This is an error message");
```
