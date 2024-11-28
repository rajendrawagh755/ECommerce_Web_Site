// src/components/Layout.js
import { Outlet } from 'react-router-dom'; // Renders child routes like Home and About

const Layout = () => {
  return (
    <div>
      <nav>
        {/* Example navigation */}
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/About">About</a></li>
        </ul>
      </nav>
      
      {/* This will render the child routes (Home, About) */}
      <main>
        <Outlet />
      </main>

      <footer>
        {/* Your footer content goes here */}
        <p>© 2024 Your Company</p>
      </footer>
    </div>
  );
};

export default Layout;
