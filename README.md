# 🧆 TUKULE - Let's Eat
# A 3D Restaurant Application where users can order meals and reserve seats in 3D.

Tukule is a dynamic, user-friendly full-stack, immersive web platform designed to modernize the restaurant reservation and dining experience. Built with cutting-edge front-end technologies, 3D visualizations, and robust backend services, Tukule lets customers visually explore menu items and restaurant table layouts in real-time before making reservations. Whether you're a foodie or a restaurant owner, Tukule redefines how you interact with food.

This is a product that is under development. It was created to be a middleware between restaurant clients and customers and the restaurant management that offers food and accommodation services.

The experience of reserving seats in restaurants is often boring and does not allow for a correct preview of the experience before purchase or reservations.

## 🚀 Live Demo
Demo Link -> tukule.vercel.app
Admin Demo Link -> tukule-admin.vercel.app

---

## ✨ Features

- 🧭 Interactive 3D table layout for real-time reservations (powered by ThreeJS + React)
- 🍔 3D food menu to view meals in a visually appealing format
- 📅 Reservation system with real-time availability updates
- 🔔 Live feedback and table status changes using WebSockets
- 📊 Admin dashboard for restaurant/table/menu management
- 🌐 Multilingual interface (English & Kiswahili)
- 📱 Mobile-first responsive design [STILL IN PROGRESS]
- 🎨 Smooth animations with GSAP and Framer Motion
- 🔒 Firebase authentication and secure backend API [IN PROGRESS]

---

## 🛠️ Tech Stack

### Frontend
- **React** (with TypeScript + Vite)
- **Framer Motion** – Page transitions & UI animation
- **GSAP** – Scroll animations & micro-interactions
- **ThreeJS** – 3D visualizations of food and tables
- **Tailwind CSS** – Utility-first styling
- **React Hook Form + Zod** – Form handling & validation
- **React Router DOM** – Navigation & routing
- **i18next** – Internationalization support

### Backend
- **Node.js + Express**
- **MongoDB (with Mongoose)**
- **Firebase Auth** – User authentication
- **Cloudinary** – Image uploads (for food and tables)
- **WebSockets / Socket.io** – Real-time table availability
- **Vercel / Render** – Deployment

---

## 📁 Folder Structure
tukule/
├── client/ # React + Vite Frontend
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── hooks/
│ │ ├── assets/
│ │ ├── lib/
│ │ ├── components/
│ │ └── main.tsx
│ └── index.html
├── server/ # Node.js Backend
│ ├── config/
│ ├── controllers/
│ ├── models/
│ └── functions/
│ └── routes/
│ └── dataconnect/
│ └── server.js
├── .env
└── README.md


---

## 🧑‍💻 Getting Started

> **Clone the repository**

```bash
git clone https://github.com/your-username/tukule.git
cd tukule
cd client
npm install
npm run dev
```
> This will run the frontend on http://localhost:5173

```bash
cd server
npm install
npm run dev
```

> This runs the server on http://localhost:5000

### 3. Environment Variables

Create a `.env` file in the `server/` directory with the following:

```env
PORT=5000
MONGODB_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

For the frontend, create a `.env` in `client/`:

```env
VITE_FIREBASE_API_KEY=your_firebase_key
VITE_BASE_API_URL=http://localhost:5000
```

---

## 🧪 Scripts

| Command           | Purpose                        |
|------------------|--------------------------------|
| `npm run dev`    | Start development server       |
| `npm run build`  | Build production assets        |
| `npm run start`  | Start production server (Node) |
| `npm run lint`   | Run ESLint checks              |

---

## 🧩 Integrations (I have integrated and would want to integrate in the future)

- 🔐 **Firebase Auth** – Secure user login and sign-up
- 📦 **Cloudinary** – Handles image hosting (3D models, food, UI)
- 🔄 **Socket.io** – Real-time table availability and feedback
- 📈 **Vercel Analytics** – Tracks app performance and visitor data

---

## 🙋‍♂️ Want to Contribute?

We welcome all kinds of contributions! Here's how you can help:

- Fork the repo
- Create a new branch (`git checkout -b feature/your-feature`)
- Commit your changes (`git commit -am 'Add feature'`)
- Push to the branch (`git push origin feature/your-feature`)
- Open a Pull Request

---

## 📣 Future Enhancements

- 📲 Mobile App (React Native / Expo)
- 🤳 User photo reviews
- 🧠 AI-powered meal suggestions
- 🪑 Dynamic table booking availability via ML

---

## 🧑‍🏫 Author

Built with 💛 by **[PHILEMON KOMI]**, Final Year Software Engineering Student at [LAIKIPIA UNIVERSITY].

- 💼 [LinkedIn] > (https://linkedin.com/in/philemon-komi/)
- 📧 [E-Mail] > philemonkomi46@gmail.com
- 🌍 [Portfolio] > (https://philemonkomi.vercel.app)

---

## 📄 License

This project is licensed under the MIT License. See `LICENSE` for more information.