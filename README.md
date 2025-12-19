# E-Commerce Product Management System

## Project Title & Overview
This application is a full-stack e-commerce prototype designed to manage products, categories, and shopping carts. It features a responsive frontend for browsing and purchasing products, backed by a robust REST API for data persistence. The system focuses on providing a seamless user experience with real-time state synchronization between the product inventory and the user's cart.

## Tech Stack

**Frontend:**
*   **Framework:** React 19 (Vite)
*   **State Management:** Redux Toolkit & RTK Query
*   **Styling:** Tailwind CSS
*   **Notifications:** React Toastify
*   **Language:** JavaScript (ES6+)

**Backend:**
*   **Runtime:** Node.js
*   **Framework:** Express.js
*   **Database:** SQLite
*   **ORM:** Sequelize
*   **File Handling:** Multer

## Key Features
*   **Dynamic Product Grid:** Browse products with server-side pagination and optimization.
*   **Advanced Filtering & Sorting:** Filter products by category and sort by price or popularity.
*   **Shopping Cart System:** Real-time cart management with instant stock updates.
*   **Checkout Process:** Simulated order placement and cart clearing.
*   **Image Handling:** Backend support for product image uploads and serving.
*   **Responsive Design:** Fully optimized UI for desktop and mobile devices.

## Installation & Setup

### Prerequisites
*   Node.js (v18+ recommended)
*   npm or yarn

### 1. Clone the Repository
```bash
git clone <repository_url>
cd Assignment4
```

### 2. Backend Setup
Navigate to the backend directory and install dependencies.
```bash
cd backend
npm install
```
Start the backend server.
```bash
npm run dev
# Server runs on http://localhost:3000 (default)
```
*Note: The SQLite database file will be created automatically via Sequelize.*

### 3. Frontend Setup
Open a new terminal, navigate to the frontend directory, and install dependencies.
```bash
cd frontend
npm install
```
Start the development server.
```bash
npm run dev
# Application runs on http://localhost:5173 (default)
```

## Challenges & Solutions

### Context
One of the most significant technical hurdles in this project involved maintaining state consistency between two distinct components: the `ItemsCart` (local user cart) and the `ProductGrid` (global inventory fetched via API).

### The Problem
The `ItemsCart.jsx` relied on local or cached state, while `ProductGrid.jsx` displayed data fetched from the server using RTK Query. When a user added an item to the cart or modified quantities, the "Stock" available in the product grid did not reflect these changes immediately. This caused a disconnect where the UI showed available stock that had actually been reserved in the cart.

### The Solution
Instead of aggressively refetching the entire product list on every cart action (which is inefficient), I leveraged **Redux Toolkit's Optimistic Updates and Cache Manipulation**.

I implemented `dispatch(productApi.util.updateQueryData)` within the cart actions. This allowed me to manually modify the existing RTK Query cache entry for the product list. By decrementing the stock in the client-side cache immediately upon adding an item, I achieved instant synchronization between the Cart and the Product Grid without waiting for a server round-trip.

## Developer's Note / Reflection

While implementing Redux Toolkit and RTK Query might seem like overkill for a project of this specific scale, I made a conscious decision to stick with it. This choice transformed a standard assignment into a valuable learning opportunity.

Navigating the complexities of `updateQueryData` and understanding the nuances of server-state caching versus client-side state gave me deep insights into how large-scale production applications handle data consistency. It forced me to move beyond simple `useState` hooks and engage with architectural patterns that are standard in professional enterprise software.

## Project Structure
```
Assignment4/
├── backend/
│   ├── src/
│   │   ├── config/         # Database configuration
│   │   ├── controllers/    # Request logic
│   │   ├── models/         # Sequelize schemas
│   │   ├── routes/         # API endpoints
│   │   └── app.js          # Express app setup
│   ├── uploads/            # Product images
│   ├── database.sqlite     # SQLite DB
│   └── index.js            # Entry point
│
└── frontend/
    ├── src/
    │   ├── components/     # UI Components (Cart, Hero, Navbar)
    │   ├── Features/       # Redux Store & API Slices
    │   ├── context/        # Context API (if applicable)
    │   └── App.jsx         # Main Component
    └── vite.config.js      # Vite configuration
```
