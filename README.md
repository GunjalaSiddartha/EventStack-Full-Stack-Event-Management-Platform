# 🚀 EventStack – Full-Stack Event Management Platform

EventStack is a modern, full-stack web application designed to simplify event discovery, booking, and management. It enables users to explore events, securely register using online payments, and receive digital tickets, while organizers can create and manage events efficiently.

---

# 📌 Table of Contents

* Overview
* Features
* Tech Stack
* System Architecture
* Setup Instructions
* Environment Variables
* API Endpoints
* Screenshots
* Project Workflow
* Future Enhancements
* Author

---

# 🌍 Overview

EventStack provides a seamless platform for:

* Discovering events across multiple categories
* Secure user authentication
* Online ticket booking with payment integration
* Automatic ticket generation after payment
* Dashboard for users and organizers

---

# ✨ Features

## 👤 User Features

* Browse events by category (Tech, Sports, Cultural, Workshop)
* View detailed event information
* Register for events
* Secure payment using Stripe
* Ticket generation after payment
* View booked tickets in dashboard

## 🧑‍💼 Organizer Features

* Create and manage events
* Upload event posters
* Track participants
* Export participant data

## 🔐 Authentication

* JWT-based authentication
* Role-based access control (User / Organizer / Admin)

---

# 🛠 Tech Stack

## Frontend

* React.js (Vite)
* Tailwind CSS
* Axios

## Backend

* Node.js
* Express.js

## Database

* MongoDB Atlas

## Payment

* Stripe API

---

# 🏗 System Architecture

```text
Frontend (React + Vite)
        ↓
API Requests (Axios)
        ↓
Backend (Node.js + Express)
        ↓
MongoDB Database
        ↓
Stripe Payment Gateway
```

---

# ⚙️ Setup Instructions

## 📌 Prerequisites

Make sure you have installed:

* Node.js (v18 or above)
* npm (v9 or above)
* MongoDB Atlas account
* Stripe account

---

## 🔧 1. Clone Repository

```bash
git clone https://github.com/your-username/eventstack.git
cd eventstack
```

---

## 🔧 2. Backend Setup

```bash
cd backend
npm install
```

### Create `.env` file in backend:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5050
CLIENT_URL=http://localhost:5173
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### Run backend:

```bash
npm run dev
```

---

## 🔧 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# 🌐 Application URLs

```text
Frontend: http://localhost:5173
Backend:  http://localhost:5050
```

---

# 🔐 Environment Variables

| Variable          | Description                   |
| ----------------- | ----------------------------- |
| MONGO_URI         | MongoDB connection string     |
| JWT_SECRET        | Secret key for authentication |
| STRIPE_SECRET_KEY | Stripe payment key            |
| CLIENT_URL        | Frontend URL                  |

---

# 🔗 API Endpoints

## Authentication

* POST `/api/auth/login`
* POST `/api/auth/signup`

## Events

* GET `/api/events`
* POST `/api/events`

## Registrations

* POST `/api/registrations/:id/register`
* GET `/api/registrations/me`

## Payment

* POST `/api/payment/checkout`

---

# 📸 Screenshots

## 🏠 Home Page

![Home](./screenshots/step-3-customer-homePage.png)

## 📄 Event Details

![Event Details](./screenshots/step-4-customer-selectedEvent.png)

## 💳 Payment Page

![Payment](./screenshots/step-5-customer-paymentDone.png)

## 🎟 Ticket Page

![Ticket](./screenshots/step-6-customer-ticketGeneration.png)

## 📊 Dashboard

![Dashboard](./screenshots/step-7-customer-dashBoard.png)

---

# 🔄 Project Workflow

1. User signs up or logs in
2. User browses available events
3. Clicks on **Register**
4. Redirected to Stripe payment page
5. After successful payment → redirected to success page
6. Ticket is generated
7. Registration is saved in database
8. Dashboard displays booked tickets

---

# 🔮 Future Enhancements

* QR Code-based ticket validation
* PDF ticket download
* Email notifications
* Admin analytics dashboard
* Real-time updates with WebSockets

---

# 👨‍💻 Author

**Gunjala Siddartha**
B.Tech CSE (AI & ML)

---

# 📌 Conclusion

EventStack demonstrates real-world full-stack development including authentication, payment integration, and scalable architecture, making it a strong project for professional and academic use.

---
