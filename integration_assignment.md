// ==========================================
// MERN STACK INTEGRATION - WEEK 4 ASSIGNMENT
// ==========================================

// ------------------------------------------
// OBJECTIVE
// ------------------------------------------
// Build a MERN (MongoDB, Express.js, React.js, Node.js) application
// that connects the backend API with a React frontend
// for CRUD operations and full-stack integration.


// ------------------------------------------
// PROJECT STRUCTURE
// ------------------------------------------
// mern-stack-integration-elby254/
// ├── client/               --> React (Vite) Frontend
// │   ├── src/
// │   │   ├── components/
// │   │   │   ├── ui/
// │   │   │   │   ├── NewNotesDialog.jsx
// │   │   │   │   ├── NoteCard.jsx
// │   │   │   │   └── other UI files
// │   │   ├── lib/api.js    --> Frontend API calls
// │   │   └── pages/Dashboard.jsx
// │   └── .env
// └── server/               --> Express Backend
//     ├── models/           --> MongoDB Models
//     │   ├── Post.js
//     │   ├── Category.js
//     │   └── Note.js
//     ├── routes/           --> API Routes
//     │   ├── postRoutes.js
//     │   ├── categoryRoutes.js
//     │   └── noteRoutes.js
//     ├── config/db.js      --> Database Connection
//     ├── server.js         --> Main Server File
//     └── .env


// ------------------------------------------
// ENVIRONMENT VARIABLES
// ------------------------------------------
// Backend (.env)
// PORT=5000
// MONGO_URI=mongodb://localhost:27017/mern_stack_db
// ALLOWED_ORIGIN=http://localhost:5173

// Frontend (.env)
// VITE_API_URL=http://localhost:5000/api
// VITE_FAKE_USER_ID=deno-user-123


// ------------------------------------------
// TASK 1: PROJECT SETUP
// ------------------------------------------
// - Created both client and server directories.
// - Initialized Node.js and React (Vite) projects.
// - Installed dependencies: express, mongoose, cors, dotenv, nodemon.
// - Added MongoDB connection using mongoose.
// - Added Express middleware (CORS + JSON).
// STATUS: COMPLETED


// ------------------------------------------
// TASK 2: BACKEND DEVELOPMENT
// ------------------------------------------
// - Created Express routes for Posts, Categories, and Notes.
// - Defined CRUD endpoints:
//   GET /api/posts
//   GET /api/posts/:id
//   POST /api/posts
//   PUT /api/posts/:id
//   DELETE /api/posts/:id
//   GET /api/categories
//   POST /api/categories
//   GET /api/notes
//   POST /api/notes
// - Added error handling middleware.
// STATUS: COMPLETED


// ------------------------------------------
// TASK 3: FRONTEND DEVELOPMENT
// ------------------------------------------
// - Built Dashboard, NoteCard, and NewNotesDialog components.
// - Connected frontend to backend using Axios via api.js.
// - Used React hooks (useState, useEffect) to manage data.
// - Added simple UI with Tailwind CSS and shadcn components.
// STATUS: COMPLETED


// ------------------------------------------
// TASK 4: FRONTEND–BACKEND INTEGRATION
// ------------------------------------------
// - Connected frontend with Express API via VITE_API_URL.
// - Implemented real-time CRUD updates from MongoDB.
// - Added loading and error states for user feedback.
// - Ensured data consistency between frontend and backend.
// STATUS: COMPLETED


// ------------------------------------------
// TASK 5: ADDITIONAL FEATURES
// ------------------------------------------
// - Integrated user authentication using Clerk (optional).
// - Improved UI/UX with dialog and reusable components.
// - Future optional features:
//   * Search or filter notes
//   * Image upload
//   * Comments or categories view
// STATUS: PARTIALLY COMPLETED


// ------------------------------------------
// COMMON ERRORS AND FIXES
// ------------------------------------------
// - "Cannot GET /api" → Ensure backend runs on port 5000.
// - "Request failed with status code 404" → Check API path.
// - CORS issue → Match ALLOWED_ORIGIN with frontend URL.


// ------------------------------------------
// HOW TO RUN
// ------------------------------------------
// Step 1: Run Backend
// cd server
// npm install
// npm run dev

// Step 2: Run Frontend
// cd client
// npm install
// npm run dev
