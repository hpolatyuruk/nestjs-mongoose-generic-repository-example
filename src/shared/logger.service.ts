import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class LoggerService extends Logger {
  constructor() {
    super();
  }

  public debug(message: any): void {
    super.debug(message, 'DEBUG');
  }

  public info(message: any): void {
    super.log(message, 'INFO');
  }

  public warn(message: any): void {
    super.warn(message, 'WARN');
  }

  public error(message: any): void {
    super.error(message, 'ERROR');

    this.trace();
  }

  public trace() {
    console.trace();
  }

  public fatal(message: any): void {
    super.error('====================== FATAL ERROR =====================');
    super.error(message, 'FATAL');

    this.trace(); // Prints out a stack trace

    process.exit(-1);
  }
}
