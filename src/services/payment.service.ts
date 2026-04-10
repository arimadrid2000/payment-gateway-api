import type { PaymentInput } from '../interfaces/payment.schema.js';

export class PaymentService {
  async process(data: PaymentInput) {
    // Simulación de latencia de red
    await new Promise(resolve => setTimeout(resolve, 800));

    const isSuccess = Math.random() > 0.15; // 85% de éxito

    if (!isSuccess) {
      throw new Error('La entidad bancaria rechazó la transacción');
    }

    return {
      id: `PAY-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      status: 'approved',
      message: 'Pago procesado con éxito',
      details: {
          received: data.amount,
          currency: data.currency
      }
    };
  }
}