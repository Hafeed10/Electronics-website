# ⚡ Power Saff Admin Dashboard

A React-based admin dashboard to manage products, connected with Firebase Firestore for real-time product storage and retrieval.

---

## 🚀 Features

- 🔐 Admin login panel
- 🛒 Add, edit, delete products
- 📦 Product listing with details
- 📷 Image support (optional with Firebase Storage)
- 🔥 Firebase Firestore integration

---

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Database:** Firebase Firestore
- **Styling:** CSS
- **Other Libraries:** React Router DOM, EmailJS (optional)

---



📦 Installation

# Clone the repository
https://github.com/Hafeed10/Electronics-website.git


# Install dependencies
npm install

# Start the development server
npm start


🔐 Firestore Rules (Development Only)

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}

<img width="1902" height="892" alt="image" src="https://github.com/user-attachments/assets/2f0c5186-f745-4a93-88af-2df164b6e1b0" />
