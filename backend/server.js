require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { errorHandler } = require('./src/middleware/errorHandler');

// Initialize Express App
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true
}));
app.use(morgan('dev'));

// Routes
const routes = require('./src/routes');
app.use('/api', routes);

// Basic health check route
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Angel AI Backend is running successfully',
  });
});

// Centralized Error Handling Middleware
app.use(errorHandler);

const prisma = require('./src/config/prisma');

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`✅ Backend started successfully on port ${PORT}`);
  try {
    await prisma.$connect();
    console.log(`✅ Prisma connected to Supabase PostgreSQL`);
  } catch (err) {
    console.error(`❌ Prisma connection failed:`, err.message);
  }
});
