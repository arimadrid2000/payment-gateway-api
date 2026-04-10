import { z } from 'zod';

export const PaymentSchema = z.object({
  amount: z.number().positive({ message: "El monto debe ser positivo" }),
  currency: z.enum(['USD', 'EUR', 'VES']),
  cardNumber: z.string().min(16).max(16),
  cvv: z.string().length(3),
  email: z.string().email()
});

export type PaymentInput = z.infer<typeof PaymentSchema>;