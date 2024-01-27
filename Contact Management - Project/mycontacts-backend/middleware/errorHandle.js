const {constants}=require("../constant_error_codes")
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        tittle: "Validation failed",        
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.NOT_FOUND:
      res.json({
        tittle: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
      break
      case constants.UNAUTHORIZED:
      res.json({
        tittle: "Unauthorized",
        message: err.message,
        stackTrace: err.stack,
      });
      break
      case constants.FORBIDDEN:
      res.json({
        tittle: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
      break
      case constants.SERVER_ERROR:
      res.json({
        tittle: "Server Error",
        message: err.message,
        stackTrace: err.stack,
      });
    default:
        console.log("No Error, All good!");
      break;
  }
};
module.exports = errorHandler;
