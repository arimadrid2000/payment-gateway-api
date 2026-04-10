import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { handlePayment, getPaymentMethods, getHealthCheck} from './controllers/payment.controller.js';
import { errorHandler } from './middlewares/error.handler.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});


// 1. Health Check (Observabilidad)
app.get('/api/v1/payments/health', getHealthCheck);

// 2. Configuración de Métodos (Para el Frontend)
app.get('/api/v1/payments/methods', getPaymentMethods);

// 3. Procesamiento de Pagos
app.post('/api/v1/payments', handlePayment);

app.use(errorHandler);

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Payment Gateway API is running 🚀",
        version: "1.0.0",
        status: "healthy"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Gateway corriendo en http://localhost:${PORT}`);
});