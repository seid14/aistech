# Firebase Integration Setup Guide

## 🚀 Firebase Integration for Aistech Website

This guide will help you connect your Aistech website to Firebase for storing contact form submissions and other features.

## 📋 Prerequisites

1. A Google account
2. Node.js installed (v18 or higher)
3. Firebase CLI (optional, for advanced features)

## 🔥 Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter project name: `aistech-website`
4. Enable Google Analytics (optional but recommended)
5. Choose your Google Analytics account
6. Click "Create project"

## 🛠️ Step 2: Set Up Firestore Database

1. In your Firebase project console, go to **Firestore Database**
2. Click **"Create database"**
3. Choose **"Start in test mode"** (for development)
4. Select a location for your database (choose the closest to your users)
5. Click **"Done"**

## 📱 Step 3: Add Web App to Firebase

1. In Firebase console, click the **web icon** (`</>`) to add a web app
2. Enter app nickname: `aistech-website`
3. **Important:** Check "Also set up Firebase Hosting" (we'll use this later)
4. Click **"Register app"**
5. Copy the Firebase configuration object (you'll need this next)

## ⚙️ Step 4: Configure Environment Variables

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Update `.env` with your Firebase config:
```env
VITE_FIREBASE_API_KEY=your-api-key-here
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef123456
```

## 🧪 Step 5: Test the Integration

1. Start your development server:
```bash
npm run dev
```

2. Fill out the contact form on your website
3. Check your Firebase console:
   - Go to **Firestore Database**
   - You should see a new document in the `contacts` collection
   - The document will contain: name, email, company, message, submittedAt, status

## 📧 Step 6: Set Up Email Notifications (Optional)

To receive email notifications when someone submits the contact form:

### Option A: Firebase Functions (Recommended)
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase Functions in your project
firebase init functions

# Create email function (we'll help you with this)
```

### Option B: Third-party Services
- **SendGrid**: Professional email service
- **Mailgun**: Reliable email delivery
- **EmailJS**: Client-side email service

## 🚀 Step 7: Deploy to Firebase Hosting

1. Build your project:
```bash
npm run build
```

2. Deploy to Firebase:
```bash
firebase deploy --only hosting
```

3. Your website will be live at: `https://your-project-id.web.app`

## 📊 Step 8: Set Up Analytics (Optional)

1. In Firebase console, go to **Analytics**
2. Enable Google Analytics if not already enabled
3. Add Firebase Analytics to your app:
```javascript
import { getAnalytics } from 'firebase/analytics';
// Add this to your Firebase config
```

## 🔒 Security Rules (Important)

Update your Firestore security rules in Firebase Console:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write access to contacts collection
    match /contacts/{document} {
      allow create: if request.auth != null || true; // Allow anonymous submissions
      allow read, update, delete: if request.auth != null;
    }
  }
}
```

## 🐛 Troubleshooting

### Common Issues:

1. **"Firebase: No Firebase App '[DEFAULT]' has been created"**
   - Check your `.env` file has correct values
   - Make sure `.env` is in your project root

2. **Contact form not submitting**
   - Check browser console for errors
   - Verify Firebase config is correct
   - Check Firestore security rules

3. **Build errors**
   - Make sure all environment variables are set
   - Check that Firebase is properly installed

## 📈 Monitoring & Analytics

Once set up, you can:
- View contact form submissions in Firestore
- Track website analytics in Firebase Analytics
- Set up alerts for new form submissions
- Export data for further analysis

## 🎯 Next Steps

After basic setup, you can add:
- User authentication
- File uploads
- Real-time chat
- Push notifications
- Advanced analytics

## 📞 Need Help?

If you encounter any issues:
1. Check the browser console for errors
2. Verify your Firebase configuration
3. Check Firebase console for any error messages
4. Review the security rules

Your Firebase integration is now ready! 🎉

