#Chat App
A real-time messaging Chat App built using React, Socket.io, Node.js, Redux-Toolkit, and MongoDB.

#Frontend
React
Redux-Toolkit
React Router
Axios
Moment.js
React Hot Toast
React Icons
Tailwind CSS

#Backend
Node.js
Express.js
MongoDB (Mongoose)
Socket.io
JSON Web Tokens (JWT)
Bcrypt.js
Dotenv
Cookie Parser
CORS

#. Environment Variables

Create .env files for both client and server.
Server .env file
FRONTEND_URL=<Frontend URL>
MONGODB_URI=<MongoDB URI>
JWT_SECRET_KEY=<JWT Secret Key>

Client .env file
REACT_APP_CLOUDINARY_CLOUD_NAME=<Cloudinary Cloud Name>
REACT_APP_BACKEND_URL=<Backend URL>

#. Running the Application
Start Backend
cd server
npm run dev

Start Frontend
cd client
npm start

#Project Structure
chat-app/
├── client/    # React frontend
├── server/    # Node.js backend

#Scripts

Frontend Scripts
npm start - Runs the app in development mode.
npm build - Builds the app for production.
npm test - Runs tests.
Backend Scripts
npm run dev - Runs the server with Nodemon.
npm start - Runs the server normally.

#Features
Real-time messaging with Socket.io
Secure authentication with JWT
MongoDB database integration
Responsive UI with React and Tailwind CSS
Cloudinary for file uploads

#Dependencies
Frontend Dependencies
"dependencies": {
  "@reduxjs/toolkit": "^2.2.3",
  "axios": "^1.6.8",
  "moment": "^2.30.1",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-hot-toast": "^2.4.1",
  "react-icons": "^5.4.0",
  "react-redux": "^9.1.1",
  "react-router-dom": "^6.23.0",
  "socket.io-client": "^4.7.5"
}

Backend Dependencies
"dependencies": {
  "bcryptjs": "^2.4.3",
  "cookie-parser": "^1.4.7",
  "cors": "^2.8.5",
  "dotenv": "^16.4.7",
  "express": "^4.21.2",
  "jsonwebtoken": "^9.0.2",
  "mongoose": "^8.9.5",
  "nodemon": "^3.1.9",
  "socket.io": "^4.8.1"
}

#Author
Noel Paul
