<h1 align="center">🎯 HireFlow - Full-Stack Interview Platform 🎯</h1>

<p align="center">
  <i>A modern, real-time technical interview platform built with React, Node.js, and Stream</i>
</p>

<p align="center">
  <a href="https://github.com/amulyabhardwaj007/HireFlow">
    <img src="https://img.shields.io/github/stars/amulyabhardwaj007/HireFlow?style=social" alt="GitHub stars">
  </a>
  <a href="https://github.com/amulyabhardwaj007/HireFlow/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-ISC-blue.svg" alt="License">
  </a>
</p>



---

## ✨ Features

### 🎨 Core Functionality
- **🧑‍💻 VSCode-Powered Code Editor** - Monaco Editor with syntax highlighting
- **🔐 Secure Authentication** - Powered by Clerk for seamless user management
- **🎥 1-on-1 Video Interviews** - High-quality video rooms for technical interviews
- **🧭 Interactive Dashboard** - Real-time stats and session management

### 🚀 Advanced Capabilities
- **🔊 Media Controls** - Mic & Camera toggle, Screen Sharing & Recording
- **💬 Real-time Chat** - Instant messaging during interviews
- **⚙️ Secure Code Execution** - Run code in isolated sandbox environments
- **🎯 Auto Feedback System** - Success/Fail based on test cases
- **🎉 Interactive UI** - Confetti on success + notifications on fail
- **🧩 Practice Mode** - Solo coding practice problems page
- **🔒 Room Locking** - Restricted to 2 participants max

### 🛠️ Technical Stack
- **🧠 Background Jobs** - Inngest for async task processing
- **🧰 REST API** - Node.js & Express backend
- **⚡ Data Management** - TanStack Query for caching & state
- **📦 Database** - MongoDB for data persistence
- **🎬 Video & Chat** - Stream.io SDK integration

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- Clerk account
- Stream.io account
- Inngest account

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/amulyabhardwaj007/HireFlow.git
cd HireFlow/talent-IQ-master
```

2. **Install dependencies**
```bash
# Install all dependencies (root, backend, frontend)
npm install

# Or install separately
cd backend && npm install
cd ../frontend && npm install
```

---

## 🔧 Configuration

### Backend Environment Variables
Create a `.env` file in `/backend`:

```bash
PORT=3000
NODE_ENV=development

# MongoDB
DB_URL=your_mongodb_connection_url

# Inngest
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

# Stream.io
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

# Clerk
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Client
CLIENT_URL=http://localhost:5173
```

### Frontend Environment Variables
Create a `.env` file in `/frontend`:

```bash
# Clerk
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# API
VITE_API_URL=http://localhost:3000/api

# Stream.io
VITE_STREAM_API_KEY=your_stream_api_key
```

---

## 🏃 Running the Application

### Development Mode

**Backend:**
```bash
cd backend
npm run dev
```
Server runs on `http://localhost:3000`

**Frontend:**
```bash
cd frontend
npm run dev
```
Client runs on `http://localhost:5173`

### Production Build

```bash
# Build frontend
npm run build

# Start production server
npm start
```

---

## 📁 Project Structure

```
talent-IQ-master/
├── backend/
│   ├── src/
│   │   ├── controllers/      # Request handlers
│   │   ├── models/           # Database schemas
│   │   ├── routes/           # API routes
│   │   ├── middleware/       # Auth & validation
│   │   ├── lib/              # Utilities
│   │   └── server.js         # Entry point
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/       # React components
    │   ├── pages/            # Route pages
    │   ├── hooks/            # Custom hooks
    │   ├── api/              # API calls
    │   ├── lib/              # Utilities
    │   └── data/             # Static data
    └── package.json
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the ISC License.

---

## 👨‍💻 Author

**Amulya Bhardwaj**

- GitHub: [@amulyabhardwaj007](https://github.com/amulyabhardwaj007)
- Project Link: [https://github.com/amulyabhardwaj007/HireFlow](https://github.com/amulyabhardwaj007/HireFlow)

---

## 🙏 Acknowledgments

- [Clerk](https://clerk.com/) for authentication
- [Stream.io](https://getstream.io/) for video and chat
- [Inngest](https://www.inngest.com/) for background jobs
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) for code editing
- [Vite](https://vitejs.dev/) for blazing fast builds

---

<p align="center">Made with hate by Amulya Bhardwaj </p>
