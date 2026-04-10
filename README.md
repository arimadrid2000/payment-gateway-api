# Payment Gateway API 💳

Una API robusta y escalable construida con **Node.js** y **TypeScript** para la gestión de transacciones de pago simuladas. Este proyecto demuestra la implementación de patrones de diseño limpios, validación estricta de datos y preparación para entornos de producción.

## 🚀 Características Técnicas

- **TypeScript (NodeNext):** Tipado estricto y configuración moderna de módulos (ESM).
- **Zod Validation:** Validación de esquemas en tiempo de ejecución para asegurar la integridad de los datos de entrada.
- **Clean Architecture:** Separación clara entre controladores (HTTP), servicios (Lógica de negocio) e interfaces.
- **Error Handling:** Manejo centralizado de errores y respuestas estandarizadas.
- **Docker Ready:** Incluye configuración para despliegue rápido en contenedores.

## 🛠️ Stack Tecnológico

* **Runtime:** Node.js v18+
* **Lenguaje:** TypeScript
* **Framework:** Express.js
* **Validación:** Zod
* **Infraestructura:** Docker

## 📦 Instalación y Configuración

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/arimadrid2000/payment-gateway-api.git](https://github.com/arimadrid2000/payment-gateway-api.git)
   cd payment-gateway-api

2. **Instalar dependencias:**
```bash
  npm install
  ```

3. **Variables de Entorno:**
Crea un archivo .env en la raíz y configura el puerto:
```bash
PORT=3000
```

4. **Desarrollo:**

```bash
npm run dev
```

5. **Producción (Build):**

```bash
npm run build
npm start
```

## 🐳 Docker (Opcional)
Si prefieres usar Docker para un entorno aislado:

```bash
docker build -t payment-api .
docker run -p 3000:3000 payment-api
```

## 🔌 API Endpoints
Procesar Pago
POST /api/v1/payments

Body esperado (JSON):

```bash
{
  "amount": 150.50,
  "currency": "USD",
  "cardNumber": "1234567812345678",
  "cvv": "123",
  "email": "arianna@example.com"
}
```

## 📐 Decisiones de Arquitectura
Este proyecto fue estructurado bajo los siguientes principios:

**Single Responsibility Principle (SRP):** Cada clase y función tiene una única razón para cambiar.

**Verbatim Module Syntax:** Para una compilación de TypeScript más limpia y predecible.

**Seguridad:** Validación de entrada estricta para prevenir inyecciones de datos malformados.

**Desarrollado con ❤️ por Arianna Madrid**
