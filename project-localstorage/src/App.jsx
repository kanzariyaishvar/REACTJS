import React, { useState, useEffect } from 'react';
import './App.css';
import Local from './Componet/Local';

function App() {
//   const [theme, setTheme] = useState('light');
//   const [language, setLanguage] = useState('en');


//   // Load theme from sessionStorage or set to 'light'

//   useEffect(() => {
//     const localTheme = sessionStorage.getItem('theme') || 'light';
//     setTheme(localTheme);
//   }, []);


//   // Load language from localStorage or set to 'en'
//   useEffect(() => {
//     const savedLanguage = localStorage.getItem('language') || 'en';
//     setLanguage(savedLanguage);
//   }, []);



//   // Save theme to sessionStorage
//   useEffect(() => {
//     sessionStorage.setItem('theme', theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//   };
//   
// Save language to localStorage
//   useEffect(() => {
//     localStorage.setItem('language', language);
//   }, [language]);


//   const handleLanguageChange = (event) => {
//     setLanguage(event.target.value);
//   };

//   return (
//     <div className={`App ${theme}`}>
//       <div className="container">
//         <h1>Theme and Language Switcher</h1>
//         <div className="theme-switcher">
//           <button onClick={toggleTheme}>Toggle Theme</button>
//         </div>
//         <div className="language-switcher">
//           <label htmlFor="languageSelect">Choose Language:</label>
//           <select id="languageSelect" value={language} onChange={handleLanguageChange}>

//             <option value="en">English</option>
//             <option value="es">हिंदी</option>
//             <option value="fr">ગુજરાતી</option>

//           </select>
//         </div>
//       </div>
//     </div>
//   );
     return(
      <Local/>
     )
}

export default App;
