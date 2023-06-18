import React, {useState} from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';




const Header = () => {

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleButtonClick = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
    if (isOpen){
      setOpen(false)
    }
  };

  const handleClick = () => {
    setOpen(!isOpen);
    if (isSubMenuOpen) {
      setIsSubMenuOpen(false)
    }
  };



  return (
    <>
    <header className="bg-gray-800 top-0 w-full z-40 fixed">
      
      <nav className="mx-4 px-4 py-2 flex items-center justify-between ">
      <div onClick={handleClick} className='text-white font-semibold text-lg hover:scale-110'>
          <Link to="/">
            <i className="fa-solid fa-circle-nodes">&nbsp; O S T</i>
          </Link>
      </div>

      {/* {
              isOpen && (
                <div className="absolute left-2 mt-44 w-auto bg-white rounded-md shadow-lg">
                  <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Jobs
                  </Link>
                  <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Events
                  </Link>
                  <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    News Feed
                  </Link>
                </div>
              )
            }
             */}

      
            


        <div className="flex items-center ">
          <div className="hidden md:block">
            <Link to="/" className="text-gray-300 hover:text-white px-3 py-2">
              Home
            </Link>
            <Link to="/" className="text-gray-300 hover:text-white px-3 py-2">
              About
            </Link>
            <Link to="/" className="text-gray-300 hover:text-white px-3 py-2">
              Services
            </Link>
            <Link to="/" className="text-gray-300 hover:text-white px-3 py-2">
              Contact
            </Link>
          </div>
          <div className="ml-3 relative">
            <button className="flex items-center focus:outline-none text-gray-300 bg-indigo-400 hover:bg-indigo-500" onClick={handleButtonClick}>
              <FaUser />
            </button>
            {
              isSubMenuOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg">
                  <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Profile
                  </Link>
                  <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Settings
                  </Link>
                  <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Sign out
                  </Link>
                </div>
              )
            }
            
            
          </div>
        </div>
      </nav>
      
    </header>
    </>
  );
};

export default Header;
