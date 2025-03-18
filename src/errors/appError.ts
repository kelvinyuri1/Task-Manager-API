export class AppError {
  public message: String;
  public statuscode: number;

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statuscode = statusCode;
  }
}