const { sendError } = require('../utils/response');
const logger = require('../utils/logger');

const errorHandler = (err, req, res, next) => {
  logger.error(err.message, { stack: err.stack });

  const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;
  
  // Prisma Unique Constraint Error
  if (err.code === 'P2002') {
    return sendError(res, 'Duplicate field value entered', 400);
  }

  // Prisma Record Not Found Error
  if (err.code === 'P2025') {
    return sendError(res, 'Resource not found', 404);
  }

  // Prisma Validation Error
  if (err.name === 'PrismaClientValidationError') {
    return sendError(res, 'Invalid data provided', 400);
  }

  // JWT or Firebase Error
  if (err.code && err.code.startsWith && err.code.startsWith('auth/')) {
    return sendError(res, 'Authentication failed', 401);
  }

  return sendError(res, err.message || 'Internal Server Error', statusCode);
};

module.exports = { errorHandler };
