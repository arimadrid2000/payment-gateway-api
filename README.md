# Payment Gateway API 💳

Una API robusta y escalable construida con **Node.js** y **TypeScript** para la gestión de transacciones de pago simuladas. Este proyecto demuestra la implementación de patrones de diseño limpios, validación estricta de datos y preparación para entornos de producción.

## 🔗 Live Demo
Puedes probar la API en vivo aquí:  
[https://payment-gateway-api-ari.onrender.com/api/v1/payments/health](https://payment-gateway-api-ari.onrender.com/api/v1/payments/health)

## 🚀 Características Técnicas

- **Algoritmo de Luhn:** Validación matemática real de números de tarjeta de crédito/débito.
- **Global Error Handling:** Middleware centralizado para respuestas de error estandarizadas y predecibles.
- **Observabilidad (Health Checks):** Endpoints dedicados para monitorear el estado del servicio y dependencias.
- **TypeScript (NodeNext):** Configuración de vanguardia con ESM (ECMAScript Modules) y tipado estricto.
- **Zod Validation:** Validación de esquemas en tiempo de ejecución para prevenir datos malformados.
- **Clean Architecture:** Separación estricta de responsabilidades (Controllers, Services, Utils, Middlewares).
- **TypeScript (NodeNext):** Tipado estricto y configuración moderna de módulos (ESM).
- **Error Handling:** Manejo centralizado de errores y respuestas estandarizadas.
- **Docker Ready:** Incluye configuración para despliegue rápido en contenedores.

## 🛠️ Stack Tecnológico

* **Runtime:** Node.js v18+
* **Lenguaje:** TypeScript
* **Framework:** Express.js
* **Validación:** Zod
* **Infraestructura:** Docker & Render

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

### 1. Health Check
`GET /api/v1/payments/health`  
Verifica el estado de salud de la API y sus componentes.

### 2. Métodos de Pago Disponibles
`GET /api/v1/payments/methods`  
Retorna las monedas y franquicias aceptadas dinámicamente.

### 3. Procesar Pago
`POST /api/v1/payments`  
Procesa una transacción. Requiere validación de tarjeta (Luhn).

Body esperado (JSON):

```json
{
  "amount": 150.50,
  "currency": "USD",
  "cardNumber": "4242424242424242",
  "cvv": "123",
  "email": "arianna@example.com"
}
```

## 🧪 Tarjetas de prueba (Sandbox)

| Caso de Uso          | Número de Tarjeta | Resultado Esperado |
|----------------------|-------------------|--------------------|
| Éxito (Visa)         | 4242424242424242  | 200 Approved       |
| Fondos Insuficientes | 4000000000000002  | 402 Declined       |
| Tarjeta Inválida     | 1234567812345670  | 400 Invalid Luhn   |

## 📐 Decisiones de Arquitectura
Este proyecto fue estructurado bajo los siguientes principios:

**Single Responsibility Principle (SRP):** Cada clase y función tiene una única razón para cambiar.

**Verbatim Module Syntax:** Para una compilación de TypeScript más limpia y predecible.

**Seguridad:** Validación de entrada estricta para prevenir inyecciones de datos malformados.

**Desarrollado con ❤️ por Arianna Madrid**
