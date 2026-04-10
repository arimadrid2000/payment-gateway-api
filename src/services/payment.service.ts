import type { PaymentInput } from '../interfaces/payment.schema.js';
import { isValidLuhn } from '../utils/luhn.validator.js';

const TEST_CARDS = {
  SUCCESS: '4242424242424242',
  DECLINED: '4000000000000002',
};

export class PaymentService {
  async process(data: PaymentInput) {
    // Simulación de latencia de red

    if (!isValidLuhn(data.cardNumber)) {
      throw { status: 400, message: 'Número de tarjeta inválido (Luhn Check failed)' };
    }

    const brand = this.getCardBrand(data.cardNumber);

    if (data.cardNumber === TEST_CARDS.DECLINED) {
      throw { status: 402, message: 'La tarjeta tiene fondos insuficientes' };
    }

    await new Promise(resolve => setTimeout(resolve, 800));

    return {
      id: `TXN-${Math.random().toString(36).toUpperCase().substring(2, 12)}`,
      brand,
      gateway_response: 'Transaction Approved',
      environment: process.env.NODE_ENV || 'development',
      message: 'Pago procesado con éxito',
      details: {
          received: data.amount,
          currency: data.currency
      }
    };
  }

  private getCardBrand(number: string): string {
    if (number.startsWith('4')) return 'VISA';
    if (number.startsWith('5')) return 'MASTERCARD';
    return 'OTHER';
  }
}