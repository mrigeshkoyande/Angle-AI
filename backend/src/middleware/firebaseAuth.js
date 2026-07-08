const admin = require('../config/firebase');
const { sendError } = require('../utils/response');

const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return sendError(res, 'Unauthorized: No token provided', 401);
    }

    const token = authHeader.split(' ')[1];

    if (!admin) {
      // For local testing if Firebase Admin is not fully configured, you might mock this or fail
      return sendError(res, 'Firebase Admin is not configured', 500);
    }

    const decodedToken = await admin.auth().verifyIdToken(token);
    
    // Attach user payload to request
    req.user = {
      firebaseUID: decodedToken.uid,
      email: decodedToken.email,
      phone_number: decodedToken.phone_number
    };

    next();
  } catch (error) {
    return sendError(res, `Unauthorized: ${error.message}`, 401);
  }
};

module.exports = { verifyToken };
