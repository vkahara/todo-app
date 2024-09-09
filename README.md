
# TODO Application

A Node.js-based full-stack TODO application, made for a backend-course, Express for backend routing, MongoDB with Mongoose for data management, bcrypt for secure authentication, and EJS for dynamic frontend rendering. straightforward platform for users to manage their todo items, with personalized accounts and sessions.

## Quick Start

### Prerequisites

- Node.js
- MongoDB
### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/vkahara/todo-backend.git
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set environment variables:** Create a `.env` file in the root directory. Required variables:

   - `SESSION_SECRET`: A secret key for session encryption.
   - `MONGODB_URI`: Your MongoDB connection string.

4. **Run the application:**

   ```sh
   npm start
   ```

   Access it via `http://localhost:3000`.

## Features

- **Authentication**: Secure login and registration.
- **Session Management**: Keeps users logged in.
- **Notes CRUD**: Create, read, update, and delete notes.
- **Responsive UI**: EJS templates with CSS for styling.

## Project Structure

- `controllers/`: Contains functions to respond to client requests.
- `models/`: Schemas for user and note data.
- `routes/`: Defines application routes.
- `views/`: EJS templates for rendering HTML.
- `public/`: Static files like CSS for the frontend.
