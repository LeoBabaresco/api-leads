# API de Leads — Node.js + PostgreSQL

API REST para gestão de leads com persistência em PostgreSQL e endpoint de webhook para ingestão de dados externos.

## Deploy
Healthcheck:
https://api-leads-ybs6.onrender.com/health

## Funcionalidades
- Criar lead: `POST /leads`
- Listar leads: `GET /leads`
- Webhook de leads: `POST /webhook/leads`
- Healthcheck: `GET /health`

## Exemplo de requisição

Criar lead:

```powershell
Invoke-RestMethod -Method POST -Uri "https://api-leads-ybs6.onrender.com/leads" -ContentType "application/json" -Body '{"name":"Lead Teste","email":"teste@email.com"}'

Stack

Node.js

Express

PostgreSQL

Render (Deploy)

POST /auth/register
POST /auth/login
Bearer Token
proteger /leads