# 📚 Book Store Web Application

A full-stack **Book Store application** built with the **MERN stack (MongoDB, Express, React, Node.js)**. Users can **add, view, update, delete, and search books**. The project demonstrates **CRUD operations, frontend-backend integration, and performance optimization**.

---

## 🌐 Live Demo

*(Optional: Add your deployed URL if available)*

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- React Router DOM
- Material UI
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 📂 Project Structure

### **Frontend**
```
src/
├─ components/
│  ├─ Header.js
│  ├─ Home.js
│  ├─ AddBook.js
│  ├─ Books/
│  │  ├─ Books.js
│  │  ├─ Book.js
│  │  └─ BookDetail.js
├─ App.js
├─ index.js
```

### **Backend**
```
backend/
├─ controllers/
│  └─ books-controller.js
├─ model/
│  └─ Book.js
├─ routes/
│  └─ book-routes.js
├─ app.js
```

---

## ⚡ Features

- **Add Book** – Add a new book with title, author, description, price, image, and availability.
- **View Books** – Display a list of all books with update/delete options.
- **Update Book** – Edit book details using a dedicated form.
- **Delete Book** – Remove books from the collection.
- **Search Books** – Search by book name or author using **debouncing** for optimized API calls.
- **Responsive UI** – Built with Material UI for a modern look.

---

## 📝 Frontend Highlights

- React functional components with **hooks** (`useState`, `useEffect`)
- **Axios** for API calls
- **React Router DOM** for client-side routing
- **Debouncing** implemented in search input to reduce API calls
- Dynamic forms with validation
- Clean and responsive design using Material UI

---

## 📝 Backend Highlights

- RESTful API with **Express.js**
- **MongoDB + Mongoose** for database operations
- Full CRUD functionality
- Search handled via backend using **MongoDB regex queries**
- Organized code with separate **controllers, routes, and models**
- Handles errors and sends proper HTTP response codes

---

## 🚀 Getting Started

### **Backend Setup**
1. Navigate to backend folder:
```bash
cd backend
```
2. Install dependencies:
```bash
npm install
```
3. Start the server:
```bash
node app.js
```
4. Server runs at `http://localhost:5000`

---

### **Frontend Setup**
1. Navigate to frontend folder:
```bash
cd frontend
```
2. Install dependencies:
```bash
npm install
```
3. Start the React app:
```bash
npm start
```
4. App runs at `http://localhost:3000`

---

## 🧠 How Search Works

- User types a query in the search bar.
- **Debounced API call** is sent to backend after 300ms pause.
- Backend filters books using MongoDB `$regex` for case-insensitive match.
- Filtered books are returned and rendered on the frontend.

---

## 🔧 API Endpoints

| Method | Endpoint           | Description             |
|--------|------------------|-------------------------|
| GET    | /books            | Get all books          |
| POST   | /books            | Add a new book         |
| GET    | /books/:id        | Get book by ID         |
| PUT    | /books/:id        | Update book by ID      |
| DELETE | /books/:id        | Delete book by ID      |

---

## 👨‍💻 Author

**Anmol Singh** – Full-Stack Developer

