"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ClusterUiSelect } from '../cluster/cluster-ui';
import { WalletButton } from '../solana/solana-provider';
import Image from 'next/image';
import logo from '../../public/logo.png';
import { Menu, X } from 'lucide-react'; // Import the hamburger and close icons from LucideReact
import { useState } from 'react';
const Navbar: React.FC = () => {
  const pathname = usePathname() || ''; // Provide a fallback to an empty string
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <div className="navbar sticky top-0 z-40 text-yellow-500 bg-gray-800 backdrop-blur-md bg-opacity-50">
      <div className="flex justify-between items-center w-full max-w-8xl h-16">
        {/* Left Section: Logo and Hamburger Menu */}
        <div className="flex items-center space-x-2 flex-start">
          <Link className="btn btn-ghost normal-case" href="/">
            <Image className="h-14 w-16" alt="Logo" src={logo} />
          </Link>
          <button className="md:hidden ml-4" onClick={toggleMenu}>
            <Menu className="h-8 w-8" />
          </button>
           {/* Always Visible Menu for Large Screens */}
      <div className="hidden md:flex justify-center">
        <ul className="flex space-x-4 text-2xl font-bold">
          <li>
            <Link
              className={`${pathname.startsWith('/clusters') ? 'text-yellow-500' : 'text-yellow-500'} hover:text-yellow-300`}
              href="/clusters"
            >
              Clusters
            </Link>
          </li>
          <li>
            <Link
              className={`${pathname.startsWith('/account') ? 'text-yellow-500' : 'text-yellow-500'} hover:text-yellow-300`}
              href="/account"
            >
              Account
            </Link>
          </li>      
        </ul>
      </div>
        </div>

        {/* Right Section: Buttons (always visible) */}
        <div className="hidden md:flex items-center space-x-2 flex-end">
          <WalletButton />
          <ClusterUiSelect />
        </div>
        
        {/* Always visible buttons on mobile */}
        <div className="md:hidden flex items-center space-x-2">
          <WalletButton />
          <ClusterUiSelect />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
          <div className="bg-gray-800 p-2 rounded-lg shadow-lg relative ">
            <button 
              className="absolute top-2 right-0 text-yellow-500" 
              onClick={toggleMenu}
            >
              <X className="h-6 w-6" />
            </button>
            <ul className="flex flex-row space-y-1 text-lg align-middle font-semibold ">
              <li>
                <Link
                  className={`${pathname.startsWith('/clusters') ? 'text-yellow-500' : 'text-yellow-500'} hover:text-yellow-300 px-2`}
                  href="/clusters"
                >
                  Clusters
                </Link>
              </li>
              <li>
                <Link
                  className={`${pathname.startsWith('/account') ? 'text-yellow-500' : 'text-yellow-500'} hover:text-yellow-300 px-2`}
                  href="/account"
                >
                  Account
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      )}

     
    </div>
  );
};

export default Navbar;

