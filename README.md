# 📱 SOCIOPEDA – A Social Media App Clone  

SOCIOPEDA is a full-stack social media application where users can create an account, log in, and interact with posts. The platform includes a **home feed**, **user profiles**, and **authentication** features, providing a seamless social networking experience.  

## ✨ Features  

### 🔹 Client (Frontend)  
- **User Authentication**: Sign up and log in securely.  
- **Home Feed**: View posts from all users.  
- **User Profiles**: Access individual user pages with their details and posts.  
- **Responsive UI**: Built with **MUI** for a modern and sleek design.  
- **Form Handling & Validation**: Powered by **Formik** and **Yup**.  
- **State Management**: Managed using **Redux** and **Redux Toolkit**.  

### 🔹 Server (Backend)  
- **Authentication**: Secure login/signup using **JWT authentication**.  
- **User Management**: CRUD operations for user profiles.  
- **Post Management**: Create, update, and retrieve user posts.  
- **Database**: Uses **MongoDB** to store user and post data.  
- **Middleware**: Express middleware for security and request handling.  

---

## 🏗️ Project Structure  

### **Client (Frontend)**  
```
client/
│
├── public/             # Public assets
├── src/
│   ├── components/     # Reusable UI components
│   ├── scenes/         # Page views
│   │── state       # Redux state management
│   ├── theme.js        # MUI theme customization
│   ├── App.js          # Main application entry
│   ├── index.js        # React DOM rendering
│
├── package.json        # Frontend dependencies
└── README.md           # Documentation
```

### **Server (Backend)**  
```
server/
│
├── controllers/        # Business logic for API routes
├── data/               # Database seeding files
├── middleware/         # Custom middleware (e.g., auth, error handling)
├── models/             # MongoDB models (User, Post, etc.)
├── routes/             # API routes
├── public/
│   ├── assets/         # Static assets
├── index.js            # Entry point for Express server
├── package.json        # Backend dependencies
└── README.md           # Documentation
```

---

## 🛠️ Technologies Used  

### **Frontend**  
- **React 19** – Component-based UI  
- **Redux Toolkit** – State management  
- **Formik & Yup** – Form handling and validation  
- **MUI (Material UI)** – UI design and styling  

### **Backend**  
- **Node.js & Express.js** – RESTful API  
- **MongoDB & Mongoose** – Database  
- **JWT (JSON Web Tokens)** – Authentication  
- **Express Middleware** – Security and request handling  

---

## 🚀 Installation & Setup  

### **Prerequisites**  
- **Node.js** (v14 or above)  
- **MongoDB** (Local or Cloud)  

### **Setup the Client**  
1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/sociopeda.git](https://github.com/Hassan-Ahmed-K/sociopedia.git
   cd sociopeda/client
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Start the frontend:  
   ```bash
   npm start
   ```

---

### **Setup the Server**  
1. Navigate to the server directory:  
   ```bash
   cd ../server
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Create a **.env** file in the server root and configure the following:  
   ```env
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. Start the backend server:  
   ```bash
   npm start
   ```

---

## 📌 API Endpoints  

### **Authentication**  
- `POST /auth/register` → Register a new user  
- `POST /auth/login` → User login  

### **Users**  
- `GET /users/:id` → Fetch user details  
- `PUT /users/:id` → Update user profile  

### **Posts**  
- `POST /posts` → Create a new post  
- `GET /posts` → Get all posts  
- `GET /posts/:id` → Get a single post  

---

## 🤝 Contribution  

Contributions are welcome! Follow these steps:  
1. **Fork** the repository.  
2. **Create a new branch** (`git checkout -b feature/new-feature`).  
3. **Commit changes** (`git commit -m 'Added new feature'`).  
4. **Push the branch** (`git push origin feature/new-feature`).  
5. Open a **Pull Request**.  

---

## 📝 License  

This project is licensed under the [MIT License](LICENSE).  

---

## 📢 Acknowledgments  

Special thanks to the **React & Node.js community** for their contributions to open-source development. 🚀  

---

Would love your feedback! ⭐ Star the repo if you find this project useful!  
#ReactJS #NodeJS #MongoDB #SocialMedia #WebDevelopment
