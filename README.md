# 🚀 Scalable Web App with Authentication & Dashboard

A full-stack web application built as part of the **Frontend Developer Intern Assignment**.  
This project demonstrates secure authentication, protected routes, CRUD operations, and a responsive, modern UI with a basic scalable backend.

---

## 📌 Project Overview

This application allows users to:
- Register & Login using JWT authentication
- View and update their profile
- Create, view, update, and delete tasks
- Access a protected dashboard
- Search and filter tasks
- Logout securely

The project is built with a **React frontend** and a **Node.js + Express backend** connected to **MongoDB Atlas**.

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Custom Neon UI (CSS)
- Thunder Client (API testing)

### Backend
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv
- CORS

---

## 📂 Project Structure

frontend-backend-assignment/
│
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── userController.js
│   │   └── taskController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   └── taskRoutes.js
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   └── index.css
│   └── package.json
│
├── postman_collection.json
└── README.md

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

git clone <your-github-repo-url>  
cd frontend-backend-assignment

---

### 2. Backend Setup

cd backend  
npm install

Create a `.env` file inside backend folder:

MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/frontendbackend  
JWT_SECRET=yourSecretKey  
PORT=5000

Start backend:

node server.js

Expected output:

server.js is running  
MongoDB connected  
Server running on port 5000

---

### 3. Frontend Setup

cd frontend  
npm install  
npm start

Frontend runs on:

http://localhost:3000

---

## 🔐 API Endpoints

### Auth Routes

POST   /api/auth/register   → Register user  
POST   /api/auth/login      → Login user  

---

### User Routes (Protected)

GET    /api/user/profile    → Get user profile  
PUT    /api/user/profile    → Update profile  

---

### Task Routes (Protected)

POST   /api/tasks           → Create task  
GET    /api/tasks           → Get all tasks  
PUT    /api/tasks/:id       → Update task  
DELETE /api/tasks/:id       → Delete task  

---

## 🔑 Authentication Flow

- Passwords are hashed using bcrypt
- JWT token is generated on login/register
- Token is stored in localStorage
- Axios interceptor attaches token to every request
- Protected routes are guarded using middleware

---

## 🖥 Frontend Pages

### Login Page
- Email + Password
- Neon UI
- Error handling

### Register Page
- Name, Email, Password
- Validation
- Neon UI

### Dashboard
- User profile display
- Task creation form
- Task list
- Search & filter
- Logout button

---

## 🧪 API Testing

All APIs are tested using **Thunder Client** and exported as **Postman Collection**.

File included:

postman_collection.json

---

## 📈 Scalability Notes

To scale this application for production:

- Use separate services for auth, user, and tasks
- Implement refresh tokens
- Add role-based access control
- Use Redis for caching
- Implement rate limiting
- Add pagination for tasks
- Use Docker and CI/CD pipeline
- Deploy on AWS / Vercel / Render

---

## 🧠 Key Highlights

- Secure JWT authentication
- Clean project structure
- Modular code
- Modern UI/UX
- Full CRUD operations
- Proper error handling
- Ready for scaling

---

## 👩‍💻 Author

Shantanu Shookdeb 
(Frontend Developer Intern Candidate)
