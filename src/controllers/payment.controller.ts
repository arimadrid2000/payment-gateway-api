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