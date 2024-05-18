import { useState } from "react";

const ToggleSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
  
      <button
        className="fixed top-5 left-5 z-10 bg-gray-800 text-white p-2 rounded-md shadow-md"
        onClick={toggleSidebar}>
        {isOpen ? "Close Sidebar" : "Open Sidebar"}
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-60 bg-gray-800 text-white z-[100] transition-all duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        {/* Sidebar content */}
        <div className="p-4">
          <h1 className="text-lg font-bold mb-4">Sidebar Content</h1>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
      </div>
 
    </div>
  );
};

export default ToggleSidebar;
