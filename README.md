# Express Prisma Blog API

A simple and extensible RESTful API for a blog platform built with:

- 🧠 **Prisma ORM**
- ⚡ **Express.js**
- 🐘 **PostgreSQL**
- 🛠️ **Node.js**

---

## 📁 Project Structure

```bash

GRAPH-BLOG/
└── backend/
    ├── Controllers/            # Route logic for each module
    │   ├── CommentController.js
    │   ├── PostController.js
    │   └── UserController.js
    │
    ├── DB/
    │   └── db.config.js        # Prisma client initialization
    │
    ├── Routes/                 # Express route definitions
    │   └── (your route files)
    │
    ├── prisma/                 # Prisma schema & migrations
    │   ├── schema.prisma
    │   └── migrations/
    │
    ├── generated/              # Custom generated Prisma client (optional)
    │
    ├── node_modules/           # Installed packages (auto-generated)
    │
    ├── .env                    # Environment variables (not committed)
    ├── .env.example            # Sample environment file (for sharing)
    ├── .gitignore              # Files and folders to ignore in Git
    ├── package.json            # Project metadata and dependencies
    ├── package-lock.json       # Dependency lock file
    └── server.js               # Entry point of Express server

```

## 🔧 Prerequisites

Make sure you have the following installed:

- Node.js (v18+ recommended)
- PostgreSQL
- Git


## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/Muhammadasim225/express-prisma-blog-api.git
cd express-prisma-blog-api/backend

# Install dependencies
npm install
```


---

### 3. ✅ **Environment Variables**

```markdown
## ⚙️ Environment Setup

Rename `.env.example` to `.env` and update it with your database credentials.

```env
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/graphblog"
PORT=6000


```


---

### 4. ✅ **Database Setup (Prisma)**

```markdown
## 🧩 Prisma & Database Setup

Run the following commands to set up your database schema:

```bash
npx prisma migrate dev --name init
npx prisma generate


```


---

### 5. ✅ **Running the Server**

```markdown
## ▶️ Running the Development Server

```bash
npm run dev
# or
node server.js

```


---

### 6. ✅ **API Endpoints (Cheat Sheet)**

Provide a table of all API routes.

```markdown
## 📮 API Endpoints

| Method | Route                         | Description            |
|--------|-------------------------------|------------------------|
| POST   | `/user/post`                  | Create a blog post     |
| GET    | `/user/posts`                 | Get all blog posts     |
| GET    | `/user/fetch-one-post/:id`    | Get a post by ID       |
| DELETE | `/user/post/:id`              | Delete a post by ID    |


```

## 🧪 Sample POST Body (JSON)

```json
{
  "user_id": 1,
  "title": "Revolution of AI",
  "description": "AI is transforming the world rapidly."
}


```

