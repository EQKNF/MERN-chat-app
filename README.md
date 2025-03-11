# Real-Time Chat App (MERN Stack)  

This **Real-Time Chat App** is a full-stack messaging platform built with the **MERN stack (MongoDB, Express.js, React, and Node.js)**, featuring real-time communication using **Socket.IO**. The app enables users to send and receive messages instantly with a seamless user experience.  

## **Key Features**  
- **User Authentication** – Secure authentication using **JWT** and **bcryptjs**.  
- **Real-Time Messaging** – Powered by **Socket.IO** for instant communication.  
- **Cloud Storage** – Integrated with **Cloudinary** for image uploads.  
- **State Management** – Utilizes **Zustand** for efficient global state handling.  
- **Modern UI** – Built with **React, Tailwind CSS v4, and DaisyUI** for a sleek, responsive design.  
- **REST API** – Backend built with **Express.js and MongoDB** for data persistence.  
- **Frontend Performance** – Optimized with **Vite** for fast builds and hot module replacement.  

## **Tech Stack**  
### **Backend**  
- **Node.js + Express.js** (REST API)  
- **MongoDB + Mongoose** (Database)  
- **Socket.IO** (WebSockets for real-time communication)  
- **JWT Authentication** (Secure login)  
- **Cloudinary** (Media storage)  

### **Frontend**  
- **React 19 + React Router** (Client-side UI)  
- **Zustand** (State management)  
- **Axios** (API requests)  
- **Tailwind CSS v4 + DaisyUI** (Styling)  
- **Lucide-React** (Icons)  
- **Socket.IO Client** (Real-time updates)  

## **Environment Variables (.env)**  
To configure the application, the following **.env** file should be created in the backend folder:  
```
MONGODB_URI=*
PORT=5001
JWT_SECRET=*
CLOUDINARY_CLOUD_NAME=*
CLOUDINARY_CLOUD_API_KEY=*
CLOUDINARY_CLOUD_API_SECRET=*
```
