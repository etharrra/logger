import { LogLevel } from './LogLevel';
import { ILogger } from './ILogger';
import { LoggerConfig } from './LoggerConfig';

export class Logger implements ILogger {
    private static instance: Logger;
    private logLevel: LogLevel;

    private constructor(config: LoggerConfig) {
        this.logLevel = config.logLevel;
    }

    public static getInstance(config: LoggerConfig): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger(config);
        }
        return Logger.instance;
    }

    private shouldLog(level: LogLevel): boolean {
        const levels = [LogLevel.VERBOSE, LogLevel.INFO, LogLevel.WARNING, LogLevel.ERROR];
        return levels.indexOf(level) >= levels.indexOf(this.logLevel);
    }

    public verbose(message: string): void {
        if (this.shouldLog(LogLevel.VERBOSE)) {
            console.log(`[VERBOSE] ${message}`);
        }
    }

    public info(message: string): void {
        if (this.shouldLog(LogLevel.INFO)) {
            console.info(`[INFO] ${message}`);
        }
    }

    public warning(message: string): void {
        if (this.shouldLog(LogLevel.WARNING)) {
            console.warn(`[WARNING] ${message}`);
        }
    }

    public error(message: string): void {
        if (this.shouldLog(LogLevel.ERROR)) {
            console.error(`[ERROR] ${message}`);
        }
    }

    // Placeholder for future file logging
    private logToFile(filePath: string, buffer: string): void {
        console.log(`[File IO ${filePath}] ${buffer}`);
    }
}
