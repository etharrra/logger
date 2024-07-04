# Logger Class Documentation

## Project Highlights

-   `Singleton Pattern Implementation`: Ensures a single instance of the Logger class for consistent and efficient logging.
-   `Logging Levels`: Supports VERBOSE, INFO, WARNING, and ERROR levels.

## Project Files

The following files are included in the project:

-   `LogLevel.ts`: Defines the different logging levels.
-   `ILogger.ts`: Interface for the Logger.
-   `LoggerConfig.ts`: Configuration interface for the Logger.
-   `Logger.ts`: Implementation of the Logger class.
-   `index.ts`: Entry point demonstrating the usage of the Logger.

## Prerequisites

-   Node.js and npm must be installed on your machine.

## SettingUp

1.  Clone the repository:

```sh
git clone https://github.com/etharrra/logger.git
cd logger
```

2. Install dependencies:

```sh
npm install
```

3. Building

```sh
npm run build
```

4. Running the Application

```sh
npm run start
```

## Logger Class Details

### Constructor

The constructor is private to enforce the <b>Singleton pattern</b> ensuring a single instance of the Logger class for consistent and efficient logging. It initializes the logger with a specified log level.

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
