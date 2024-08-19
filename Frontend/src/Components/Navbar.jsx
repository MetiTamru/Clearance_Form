import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-center gap-3 items-center">
        <NavLink
          to="/departement"
          className={({ isActive }) =>
            `text-white px-4 py-2 rounded-md ${isActive ? 'bg-teal-700' : 'hover:bg-teal-600'}`
          }
        >
          Department
        </NavLink>
        <NavLink
          to="/library"
          className={({ isActive }) =>
            `text-white px-4 py-2 rounded-md ${isActive ? 'bg-teal-700' : 'hover:bg-teal-600'}`
          }
        >
         Library
        </NavLink>
        <NavLink
          to="/cafe"
          className={({ isActive }) =>
            `text-white px-4 py-2 rounded-md ${isActive ? 'bg-teal-700' : 'hover:bg-teal-600'}`
          }
        >
         Cafeteria 
        </NavLink>
        <NavLink
          to="/student-service"
          className={({ isActive }) =>
            `text-white px-4 py-2 rounded-md ${isActive ? 'bg-teal-700' : 'hover:bg-teal-600'}`
          }
        >
        Student Service 
        </NavLink>
        <NavLink
          to="/dormitary"
          className={({ isActive }) =>
            `text-white px-4 py-2 rounded-md ${isActive ? 'bg-teal-700' : 'hover:bg-teal-600'}`
          }
        >
        Dormitary
        </NavLink>
        <NavLink
          to="/book-store"
          className={({ isActive }) =>
            `text-white px-4 py-2 rounded-md ${isActive ? 'bg-teal-700' : 'hover:bg-teal-600'}`
          }
        >
         Book Store 
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
