# Student Management System

A robust **Next.js web application** designed to help schools manage students.

---

## 🚀 Getting Started

Follow these steps to get a local copy of the project up and running.

### Prerequisites
Make sure you have the following installed on your machine:
* **Node.js** (v18.0.0 or higher)
* **npm** 
* **Mongodb** database instance

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/hame353678-stack/Student-Management-System
   cd student-management-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI =
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

## 🏗️ Project Architecture

This project uses the **Next.js App Router** structure alongside Prisma ORM for database management.

```text
├── Student-Management-System/
│   ├── app/                  # App Router folders (pages & API routes)
│   │   ├── (main)/           # Route group for main routes
│   │   ├── Account/          # Login, Signup route
│   │   ├── AddnewCourse/     # To Resgister course
│   │   ├── Admin/            # To access admin panel
│   │   ├── AdminAssignments/ # To give assignments
│   │   ├── AdminCourses/     # To add new course
│   │   ├── api/              # Backend API endpoints
│   │   ├── dashboard/        # Protected student/teacher dashboard layout
│   │   ├── login/            # Authentication pages
│   │   └── layout.tsx        # Global root layout
│   ├── docs/                 # User & Developer oriented Documentation
│   ├── public/               # App Images
│   ├── lib/                  # Third-party configurations (db)
│   └── DataTypes/            # TypeScript type definitions & interfaces
│   ├── proxy.ts/             # Middleware that runs for ever route
│   ├── docs/
│   └── package.json
```

---

## 🔌 API Documentation

All API endpoints expect data in JSON format and return JSON responses.

### 1. Get Student
* **Endpoint:** `GET /api/studentdata`
* **Params (optional):** `/:id`
* **Success Response:**
  * **Code:** `200 OK`
  * **Content:**
    ```json
    [
        {
            "_id":"6aa4dd27652ebfe5511908de",
            "id":12,"name":"Kashif",
            "regId":"DS120252000",
            "department":"Data Science",
            "semester":"3rd",
            "CGPA":3,
            "Location":"Somewhere in Kohat"
    }
    ]
    ```

### 2. Update Student details
* **Endpoint:** `POST /api/studentdata/:id`
* **Headers:** `Content-Type: application/json`
* **Request Body:**
  ```json
  {
    "id": "parseInt(id)",
    "name": "username",
    "regId": "regId",
    "department": "department",
    "semester": "semester",
    "CGPA": "Number(CGPA)",
    "Location": "Location",
  }
  ```
* **Success Response:**
  * **Code:** `200 Created`
---

### Server Actions
* **Addcourse:** `Handles the logic for a user or instructor to create and submit a new course to the database.`
* **AdminAddCourse:** `Processes administrative privileges to create and publish a new course with elevated permissions.`
* **Deletecourse:** `Removes an existing course and its associated data from the database system.`
* **DeleteStudent:** `Removes a student account and unenrolls them from active courses safely.`
* **Login:** `Authenticates user credentials and activate user session`
* **Logout:** `Terminates the active user session.`
* **Signup:** `Registers a new user account and activate session.`

## 🚀 Deployment

The fastest way to deploy this Next.js application is using the [Vercel Platform](https://vercel.com).

1. Push your code changes to GitHub, GitLab, or Bitbucket.
2. Import your repository into Vercel.
3. Configure your Environment Variables (`DATABASE_URL`, `NEXTAUTH_SECRET`) in the Vercel dashboard.
4. Click **Deploy**. Vercel will automatically build the project and issue a live URL.