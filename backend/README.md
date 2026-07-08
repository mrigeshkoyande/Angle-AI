# Angel AI Backend

This is the official Node.js + Express.js backend for **Angel AI**, an AI-powered Women Safety Platform.

## Features
- **Firebase Authentication** for secure token-based user identification.
- **PostgreSQL + Prisma** (hosted on Supabase) for storing application data.
- **Google Gemini AI** for the Escape Coach feature.
- **Cloudinary** for the Evidence Vault (Image/Video/Audio uploads).
- **Google Maps API** for fetching nearby safety locations (Police, Hospitals, Safe Places).
- **Firebase Cloud Messaging (FCM)** for push notifications.

## Requirements
- Node.js (v18+)
- PostgreSQL Database (Supabase)
- Firebase Project (Authentication & Admin SDK)
- Cloudinary Account
- Google Gemini API Key
- Google Maps API Key

## Setup Instructions

1. Clone the repository and navigate into the `backend` folder.
2. Run `npm install` to install all dependencies.
3. Create a `.env` file from the provided `.env.example` file and populate it with your actual credentials.
4. (Optional) Make sure you have `uploads/` directory for temporarily saving files before they are pushed to Cloudinary.

## Running the App
- **Development**: Run `npm run dev` (starts the server with nodemon).
- **Production**: Run `npm start`.

## API Documentation
A `postman_collection.json` is provided in the root directory. You can import this into Postman to test all the available endpoints.

## Folder Structure
- `src/config/`: Configuration for MongoDB, Firebase, and Cloudinary.
- `src/controllers/`: Route controllers with the main business logic.
- `src/models/`: Mongoose schemas.
- `src/routes/`: Express routers.
- `src/middleware/`: Custom middlewares for authentication, validation, error handling, and file uploads.
- `src/services/`: Service wrappers for third-party integrations.
- `src/utils/`: Constants, standardized responses, and loggers.
