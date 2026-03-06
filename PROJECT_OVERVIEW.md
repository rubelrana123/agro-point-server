# AgroPoint Project Overview

## Project Name
AgroPoint - A Farm Product Marketplace and Farming Knowledge Sharing Platform.

## Project Description
AgroPoint is a backend REST API platform that connects farmers and consumers directly.
Farmers can list products, sell online or cash-on-delivery, and share farming knowledge posts.
Users can discover nearby products, place orders, review products, and engage with farmer posts.

## Core Tech Stack
- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose

## Security and Platform Essentials
- JWT authentication
- Role-based authorization
- bcrypt password hashing
- Helmet
- Rate limiting
- Input validation (Zod or Joi)
- File upload (Cloudinary or local storage)
- Payments (Stripe + Cash on Delivery)

## System Roles
- Admin: manages users, farmer verification, products, posts, reports, analytics
- Farmer: manages profile, products, orders, posts, earnings, and reviews
- User (Buyer): browses, orders, pays, reviews, follows farmers, reads posts

## Core Features
1. Product marketplace (listing, browse, cart, checkout)
2. Location-based product discovery
3. Order flow with statuses:
   - pending, accepted, preparing, shipped, delivered, cancelled
4. Review and rating after delivery
5. Farming knowledge sharing (posts, likes, comments, saves)
6. Farmer verification with trust badge
7. Favorite farmers / follow system
8. Notifications (orders, restock, new posts)

## Planned Data Models
- User
- FarmerProfile
- Product
- Order
- Review
- Post (Knowledge)
- Comment

## Backend Architecture
Layered architecture:
Routes -> Controllers -> Services -> Models

Middleware responsibilities:
- auth
- validation
- error handling

## Target Folder Structure
```text
src
├── config
├── modules
│   ├── auth
│   ├── users
│   ├── farmers
│   ├── products
│   ├── orders
│   ├── reviews
│   └── posts
├── middlewares
├── utils
├── routes
├── app.ts
└── server.ts
```

## Example API Endpoints
Auth
- POST /api/auth/register
- POST /api/auth/login
- POST /api/auth/logout

Products
- GET /api/products
- GET /api/products/:id
- POST /api/products
- PUT /api/products/:id
- DELETE /api/products/:id

Orders
- POST /api/orders
- GET /api/orders/my-orders
- PATCH /api/orders/:id/status

Reviews
- POST /api/reviews
- GET /api/products/:id/reviews

Posts
- POST /api/posts
- GET /api/posts
- POST /api/posts/:id/comment
