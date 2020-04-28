class RenderError extends Error {
  constructor(message) {
    super(message)
    this.name = "RenderError";
    this.message = message;
  };
};

class ServiceError extends Error {
  constructor(message) {
    super(message)
    this.name = "ServiceError";
    this.message = message;
  };
};

export { RenderError, ServiceError };
