import { Outlet, Link } from "react-router-dom";
import { MadeWithDyad } from "./made-with-dyad";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-center items-center">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Trang chủ
            </Link>
            <Link to="/library" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Thư viện
            </Link>
          </div>
        </nav>
      </header>
      
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>
      
      <footer className="w-full">
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default Layout;