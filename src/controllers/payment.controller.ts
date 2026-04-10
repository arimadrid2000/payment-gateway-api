import type { Request, Response } from 'express';
import { PaymentService } from '../services/payment.service.js';
import { PaymentSchema } from '../interfaces/payment.schema.js';

const paymentService = new PaymentService();

export const handlePayment = async (req: Request, res: Response) => {
  try {
    const validatedData = PaymentSchema.parse(req.body);
    const result = await paymentService.process(validatedData);
    return res.status(200).json(result);
  } catch (error: any) {
    if (error.errors) {
      return res.status(400).json({ status: 'error', details: error.errors });
    }
    return res.status(500).json({ status: 'declined', message: error.message });
  }
};

export const getPaymentMethods = (req: Request, res: Response) => {
  // En una app real, esto podría venir de una base de datos o config
  const methods = {
    accepted_currencies: ['USD', 'EUR', 'VES'],
    card_brands: ['VISA', 'MASTERCARD', 'AMEX'],
    min_amount: 1,
    max_amount: 10000
  };
  
  return res.status(200).json(methods);
};

export const getHealthCheck = (req: Request, res: Response) => {
  const healthStatus = {
    status: 'up',
    timestamp: new Date().toISOString(),
    services: {
      database: 'connected',
      bank_gateway_simulator: 'online'
    },
    uptime: process.uptime()
  };
  
  return res.status(200).json(healthStatus);
};