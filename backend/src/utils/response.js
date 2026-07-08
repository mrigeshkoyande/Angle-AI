/**
 * Standardize successful responses
 * @param {Object} res - Express response object
 * @param {String} message - Success message
 * @param {Object} data - Data to send
 * @param {Number} statusCode - HTTP status code
 */
const sendSuccess = (res, message = 'Operation Successful', data = {}, statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

/**
 * Standardize error responses
 * @param {Object} res - Express response object
 * @param {String} message - Error message
 * @param {Number} statusCode - HTTP status code
 */
const sendError = (res, message = 'An error occurred', statusCode = 500) => {
  return res.status(statusCode).json({
    success: false,
    message,
  });
};

module.exports = {
  sendSuccess,
  sendError,
};
