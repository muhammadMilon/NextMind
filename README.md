# NextMind AI - Full-Stack Tech Academy

NextMind is a premium, full-stack web application designed for a modern tech academy. It features a stunning 7-section landing page, a secure item marketplace for hardware and digital products, and a robust authentication system.

## 🚀 Features

- **Premium Landing Page**: 7 meticulously designed sections including Hero, Tech Stack Marquee, Bento Grid Features, FAQ, and more.
- **NextAuth.js Authentication**: Secure session management using `CredentialsProvider`.
- **Item Marketplace**: A dynamic grid layout fetching real-time data from an Express.js backend.
- **Dynamic Item Details**: Deep-dive into specific items with dynamic routing and detailed specs.
- **Protected Admin Panel**: Secure `/admin/add` route restricted to logged-in administrators.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop using Vanilla CSS and modern layout techniques.
- **Express.js API**: A lightweight backend managing data and authentication logic.

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### 1. Clone the repository
```bash
git clone <repository-url>
cd NextMind
```

### 2. Backend Setup (Express.js)
The backend runs on port 5000 by default.
```bash
# Navigate to the root (where server.js is)
npm install
node server.js
```

### 3. Frontend Setup (Next.js)
The frontend runs on port 3000.
```bash
# In a new terminal window
npm install
npm run dev
```

### 4. Environment Variables
Create a `.env.local` file in the root directory:
```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_key_here
```

## 🔐 Credentials
Use the following credentials to access the protected admin routes:
- **Email**: `admin@nextmind.com`
- **Password**: `admin123`

## 🛣️ Route Summary

### Public Routes
- `/`: Stunning landing page with 7 sections.
- `/items`: Marketplace listing all available courses/items.
- `/items/[id]`: Detailed view for a specific item.
- `/login`: Professional login page for administrators.

### Protected Routes (Login Required)
- `/admin/add`: Page to add new items to the marketplace.

## 🏗️ Technology Stack
- **Frontend**: Next.js 15+ (App Router), React, Vanilla CSS.
- **Backend**: Node.js, Express.js.
- **Authentication**: NextAuth.js.
- **Icons/Illustrations**: Lucide React.
- **Animations**: Custom CSS Keyframes and CSS transitions.
