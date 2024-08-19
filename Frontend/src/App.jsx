import { useState } from 'react'
import {  Routes, Route, Navigate } from 'react-router-dom';
import Department from './Components/Department';
import SignUP from './Components/SignUp';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Cafeteria from './Components/Cafeteria';
import BookStore from './Components/BookStore';
import Library from './Components/Library';
import Dormitary from './Components/Dormitary';
import StudentService from './Components/StudentService';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
    {!isLoggedIn ? (
      <>
      <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/signup" element={<SignUP setIsLoggedIn={setIsLoggedIn} />} />
      </>
      
      
    ) : (
    <>
     <Route
      path="/*"
      element={
        <>
          <Navbar />
            <Routes>
              <Route path="/departement" element={<Department />} />
              <Route path="/cafe" element={<Cafeteria />} />
              <Route path="/book-store" element={<BookStore />} />
              <Route path="/library" element={<Library />} />
              <Route path="/student-service" element={<StudentService />} />
              <Route path="/dormitary" element={<Dormitary />} />
              
            
            </Routes>
                </>       
                
                }
              />
            </>
            )}

            <Route path="*" element={<Navigate to={isLoggedIn ? "/" : "/"} />} />
            <Route path="*" element={<Navigate to={isLoggedIn ? "/" : "/"} />} />
            </Routes>

      );    
        
}

export default App
