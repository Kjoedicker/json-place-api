
class CustomError extends Error {
  constructor(code, message) {
    super(message);
    this.statusCode = code;
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  serializeErrors() {
    return {message: this.message};
  }
}

module.exports = CustomError;

