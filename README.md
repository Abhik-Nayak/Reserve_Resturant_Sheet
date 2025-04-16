

```markdown
# 🪑 Reserve Restaurant Sheet App

A simple and modern MERN stack application where users can **reserve a seat at a restaurant**. It includes a sleek frontend and a RESTful API backend built with Express and MongoDB.

🌐 Live App: [https://reserve-resturant-sheet.vercel.app/](https://reserve-resturant-sheet.vercel.app/)

---

## ✨ Features

- 🧾 Make a reservation through a responsive UI
- 📬 API integration using Axios
- 🔐 Secure data handling with validation
- 🔄 Real-time UI updates with React Toast
- 🔁 Smooth page transitions using React Router
- 🔒 CORS-enabled API for frontend-backend communication

---

## 🧩 Tech Stack

### 🖥 Frontend (Client/UI)
- React 19
- Vite
- React Router DOM v7
- Axios
- React Icons
- React Toast
- React Scroll

### 🛠 Backend (Server/API)
- Node.js
- Express.js (v5)
- MongoDB with Mongoose
- dotenv for environment variables
- CORS and Cookie Parser
- Validator for input validation

---

## 📁 Project Structure

```
/reserve-restaurant-app
├── client/       # React Frontend
│   └── src/
│       └── components/
├── server/       # Express Backend
│   ├── routes/
│   ├── controllers/
│   └── database/
```

---

## 🛠 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Abhik-Nayak/Reserve_Resturant_Sheet
cd Reserve_Resturant_Shee
```

---

### 2. Backend Setup

```bash
cd server
npm install
npm run dev
```

Create a `.env` file in the `server` folder:
```
PORT=8081
MONGODB_URI=your_mongodb_connection_string
```

---

### 3. Frontend Setup

```bash
cd client
npm install
npm run dev
```

If your backend is hosted separately (e.g., Render), set your API base URL in `.env`:
```
VITE_API_URL=https://reserve-resturant-sheet.onrender.com/
```

---

## 🔗 API Endpoint

| Method | Endpoint                         | Description                |
|--------|----------------------------------|----------------------------|
| GET    | `/api/v1/reservation`           | Get all reservations       |
| POST   | `/api/v1/reservation/send`      | Create a new reservation   |

---

## 💡 Future Improvements

- User Authentication (JWT)
- Admin dashboard to manage reservations
- Email notifications for bookings
- Reservation calendar view

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

### 🙌 Made with love by Abhik Nayak
