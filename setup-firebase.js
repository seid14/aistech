#!/usr/bin/env node

/**
 * Firebase Setup Helper Script
 * This script helps you set up Firebase configuration
 */

const fs = require('fs');
const path = require('path');

console.log('🔥 Aistech Firebase Setup Helper');
console.log('================================\n');

// Check if .env file exists
const envPath = path.join(__dirname, '.env');
const envExamplePath = path.join(__dirname, '.env.example');

if (!fs.existsSync(envPath)) {
  console.log('📝 Creating .env file from template...');
  if (fs.existsSync(envExamplePath)) {
    fs.copyFileSync(envExamplePath, envPath);
    console.log('✅ .env file created successfully!');
  } else {
    console.log('❌ .env.example file not found!');
    process.exit(1);
  }
} else {
  console.log('ℹ️  .env file already exists');
}

console.log('\n📋 Next Steps:');
console.log('1. Go to https://console.firebase.google.com/');
console.log('2. Create a new Firebase project');
console.log('3. Add a web app to get your config');
console.log('4. Update the .env file with your Firebase config');
console.log('5. Enable Firestore Database');
console.log('6. Test the contact form');

console.log('\n📖 For detailed instructions, see FIREBASE_SETUP.md');

console.log('\n🎉 Firebase setup helper completed!');
console.log('Run "npm run dev" to test your setup.');

