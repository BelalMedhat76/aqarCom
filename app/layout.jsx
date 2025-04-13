// app/layout.jsx
"use client"
import './globals.css'
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n'; // Import the initialized i18n instance
import Navbar from "./components/Navbar";
import { TopNav } from './components/topNav';

export default function RootLayout({ children }) {
  return (
    <I18nextProvider i18n={i18n}>
      <html lang="en">
        <body> 
     
          {children}
        </body>
      </html>
    </I18nextProvider>
  );
}