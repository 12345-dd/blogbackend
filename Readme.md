# Blog App - Backend

This is the backend API for the Blog Application built using Node.js and Express.

It handles:
- Blog CRUD operations
- AI-powered blog suggestions using Google Gemini API

## Tech Stack

- Node.js
- Express.js
- SQLite
- Google Gemini API
- dotenv
- CORS


## Run Locally

### 1. Clone Repository

git clone https://github.com/12345-dd/blogbackend.git  
cd blogbackend  


### 2. Install Dependencies

npm install  


### 3. Create Environment File

Create a `.env` file inside the backend folder and add:

PORT=5000
API_KEY=gemini_api_key
DB_PATH=./blogs.db

### 4. Start Server

npm start  

Server will run on:

http://localhost:5000  

---

## API Endpoints

### Blogs
GET /api/blogs  
GET /api/blogs/:id  
POST /api/blogs  
PUT /api/blogs/:id  
DELETE /api/blogs/:id  

### AI Suggestions
POST /api/ai-suggestions  
