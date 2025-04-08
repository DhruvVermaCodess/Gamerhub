# ✨ Ecommerce App ✨

A modern, full-stack E-commerce application built with a microservices architecture.

## 🚀 Features

*   User Authentication (Sign up, Login, Logout)
*   Product Browsing & Search
*   Shopping Cart Management
*   Order Placement (Conceptual)
*   Responsive Design

## 💻 Tech Stack

*   **Frontend:** React (Vite), JavaScript, CSS
*   **Backend:** Node.js, Express.js
*   **Architecture:** Microservices (API Gateway, Auth Service, etc.)
*   **Package Manager:** npm

## 📂 Project Structure

The project is organized into two main directories:

```
EcommerceApp/
├── backend/         # Contains all backend microservices and API Gateway
│   ├── api_gateway/
│   ├── auth_service/
│   ├── ... (other services)
│   ├── index.js     # Main entry point for a service (likely API Gateway)
│   └── package.json
├── frontend/        # Contains the React frontend application
│   ├── public/
│   ├── src/
│   ├── index.html
│   └── package.json
└── Readme.md        # This file
```

## ⚙️ Getting Started

Follow these instructions to get the project running locally.

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18 or later recommended)
*   [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Backend Setup

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```
2.  **Install dependencies for each service:**
    *Navigate into each service directory (`api_gateway`, `auth_service`, etc.) and run:*
    ```bash
    npm install
    ```
    *(Alternatively, if there's a root `package.json` managing all backend services via workspaces, you might just run `npm install` in the `backend` directory).*
3.  **Configure Environment Variables:**
    *Each service might require its own `.env` file. Check the respective service directories for `.env.example` files and create your `.env` files accordingly.*
4.  **Run the services:**
    *Start each backend service (the exact command might vary, check `package.json` in each service):*
    ```bash
    # Example for one service
    npm run dev 
    # or
    npm start
    ```

### Frontend Setup

1.  **Navigate to the frontend directory:**
    ```bash
    cd ../frontend 
    # (Assuming you are in the backend directory)
    # Or from the root: cd frontend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Configure Environment Variables:**
    *Check for a `.env.example` file in the `frontend` directory. Create a `.env` file and add necessary variables, like the API Gateway URL.*
    ```env
    VITE_API_BASE_URL=http://localhost:PORT # Replace PORT with your API Gateway port
    ```
4.  **Run the frontend application:**
    ```bash
    npm run dev
    ```
    *The application should now be accessible in your browser, typically at `http://localhost:5173` (Vite's default).*

## 
