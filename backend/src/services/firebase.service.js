const admin = require('../config/firebase');

const sendPushNotification = async (deviceToken, title, body, data = {}) => {
  try {
    const message = {
      notification: { title, body },
      data,
      token: deviceToken,
    };
    const response = await admin.messaging().send(message);
    return response;
  } catch (error) {
    console.error('Error sending FCM:', error);
    throw error;
  }
};

const verifyIdToken = async (token) => {
  try {
    return await admin.auth().verifyIdToken(token);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  sendPushNotification,
  verifyIdToken,
};
