# Ferramas - Tienda de Ferretería Online 🛠️

Este proyecto es una tienda web desarrollada con HTML, CSS y JavaScript puro, utilizando servicios serverless de AWS como backend.

## 🧩 Tecnologías utilizadas

- **Frontend**
  - HTML / CSS / JavaScript
  - Bootstrap (UI)
- **Backend**
  - AWS Lambda
  - API Gateway
  - Transbank SDK (Webpay Plus)
  - PyMySQL para conexión a RDS
- **Base de datos**
  - Amazon RDS (MySQL)

## 🔐 Autenticación

El login y registro de usuarios se maneja con **Amazon Cognito**.

## 💳 Flujo de pago con Transbank

1. El usuario selecciona productos y realiza una orden.
2. Se crea una orden en la base de datos con `estado = pendiente`.
3. Se redirige a Webpay Plus para el pago.
4. Al finalizar, Transbank redirige a `post_pago.html` con el `token_ws`.
5. Esta página contacta una **Lambda** (`commitTransaccion`) que:
   - Consulta Transbank para verificar la transacción.
   - Actualiza el estado de la orden en la base de datos.
   - Retorna los detalles de la orden al frontend para mostrar la boleta.

