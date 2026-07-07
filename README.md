# Student Attendance Management System

A full-stack MERN application that allows students to securely register, log in, mark daily attendance, and view their attendance history using JWT authentication.

## Features

- Student Registration & Login
- JWT Authentication
- Password Hashing with bcryptjs
- Protected Routes
- Mark Daily Attendance
- View Attendance Report
- Logout Functionality

## Tech Stack

- **Frontend:** React, Vite, Axios, React Router DOM
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT, bcryptjs

## Installation

### Clone the repository

```bash
git clone https://github.com/prachistudentmin24-sys/student-attendance-management-system.git
cd student-attendance-management-system
```

### Install dependencies

```bash
cd backend
npm install

cd ../frontend
npm install
```

### Create a `.env` file inside the backend folder

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Run the project

```bash
# Start the backend
cd backend
npm run dev

# Start the frontend
cd ../frontend
npm run dev
```
