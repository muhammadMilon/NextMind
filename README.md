# NextMind AI - Full-Stack Tech Academy

NextMind is a premium, full-stack education platform built with Next.js 15/16. It empowers students with modern web development skills through comprehensive courses, a dynamic marketplace, and a seamless user experience.

## 🛠️ Setup & Installation

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### 1. Project Initialization
```bash
git clone <repository-url>
cd NextMind
npm install
```

### 2. Backend Server
The Express.js server handles product data and mock authentication logic.
```bash
# In the root directory
node server.js
```
The server will start on `http://localhost:5000`.

### 3. Frontend Application
```bash
# In the root directory
npm run dev
```
The application will be available at `http://localhost:3000`.

### 4. Environment Variables
Create a `.env.local` file in the root for NextAuth configuration:
```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_key
```

## 🔐 Credentials (Mock Login)
- **Email**: `admin@nextmind.com`
- **Password**: `admin123`

## 🛣️ Route Summary

### Public Routes
- `/`: **Landing Page** with 7 relevant sections (Hero, Features, About, Services, Testimonials, Stats, CTA).
- `/courses`: **Item List Page** displaying all available academy courses.
- `/courses/[id]`: **Item Details Page** showing comprehensive info for a single course.
- `/login`: **Login Page** for accessing protected administrative features.

### Protected Routes
- `/courses/add`: **Add Item Page** allowing authenticated users to create new course listings.

## ✨ Implemented Features

### 1. 7-Section Landing Page
A high-conversion landing page featuring Hero, Features, About, Services, Testimonials, Stats (Academy by the Numbers), and a final CTA. Designed with a professional light-mode aesthetic.

### 2. Custom Cookie-Based Authentication
Secure credential-based login system using a dedicated API route. Handles session management via secure cookies and protects administrative routes from unauthenticated access. Successfully redirects to the marketplace upon login.

### 3. Dynamic Item Marketplace
Fetches course data from an Express.js API and renders them in a responsive grid. Each card displays the name, description, price, and a high-quality preview image.

### 4. Course Detail System
Implementation of dynamic routing to provide specific technical details, instructor information, and pricing for each course in the academy.

### 5. Protected Content Management
A dedicated form at `/courses/add` (protected by middleware) that allows for adding new courses to the marketplace. Features real-time state management and API integration.

### 6. Toast Notifications
Integrated visual feedback system that notifies users upon successful course creation, enhancing the administrative user experience.

### 7. Global Light Mode UI
A professional, high-contrast redesign focusing on readability, modern typography, and a "Logo-Left" Navbar layout for a premium enterprise feel.

## 🏗️ Technologies
- **Frontend**: Next.js 15+ (App Router), React 19, Vanilla CSS.
- **Backend**: Node.js, Express.js.
- **Auth**: NextAuth.js.
- **Design**: Glassmorphism, Responsive CSS Grid/Flex.
