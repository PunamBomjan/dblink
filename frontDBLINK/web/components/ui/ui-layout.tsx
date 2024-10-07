"use client";
import React, { Suspense, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import logo from '../../public/logo.png';
import facebookIcon from '../../public/facebook.png';
import instagramIcon from '../../public/instagram.png';
import twitterIcon from '../../public/twitter.png';
import linkedinIcon from '../../public/linkedin.png';
import { WalletButton } from '../solana/solana-provider';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AppHero } from './AppHero';
import ExploreEvent from '../ui/ExploreEvent';
import AboutUs from '../AboutUs';
import MerchandiseStore from '../MerchandiseStore';
import Contact from '../Contact';
import toast, { Toaster } from 'react-hot-toast';
import { AccountChecker } from '../account/account-ui';
import { ClusterUiSelect, ClusterChecker } from '../cluster/cluster-ui';
import HowItWorks from '../HowItWorks';
import AppModal from '../ui/AppModal'; // Ensure AppModal is imported
import Background from './Background';
import PartnerLogo from './PartnerLogo';
import Comparison from './Comparison';
export const HeroSection: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => {
  return (
      <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-8 text-center">
          <h1 className="text-4xl font-bold">{title}</h1>
          {subtitle && <p className="mt-4 text-xl">{subtitle}</p>}
      </div>
  );
};
// Define the EllipsifyProps type
type EllipsifyProps = {
  text: string;
  maxLength?: number; // Optional property
};

// Use EllipsifyProps in the ellipsify function
export function ellipsify({ text, maxLength = 20 }: EllipsifyProps): string {
  if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...'; // Add ellipsis if text is too long
  }
  return text; // Return original text if it's within the length limit
}

// Example usage
const text = "This is a very long text that needs ellipsification";
const ellipsifiedText = ellipsify({ text }); // You can omit maxLength here since it defaults to 20
console.log(ellipsifiedText); // Output: "This is a very long..."

interface LinkProps {
  label: string;
  path: string;
}

interface UiLayoutProps {
  children: React.ReactNode;
  links: LinkProps[];

  title?: React.ReactNode; // Add this if it's supposed to be optional
  subtitle?: React.ReactNode;
}

const UiLayout: React.FC<UiLayoutProps> = ({ children, links }) => {
  const pathname = usePathname() || '';
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSignUp = async () => {
    if (email) {
      try {
        await axios.post('/api/signup', { email });
        toast.success('Signed up successfully!');
      } catch (error) {
        toast.error('Failed to sign up. Please try again.');
      }
    } else {
      toast.error('Please enter a valid email address.');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col bg-black">
      <div className="navbar sticky top-0 z-40 text-purple-600 flex-col md:flex-row space-y-2 md:space-y-0 font-bold bg-gray-800 backdrop-blur-md bg-opacity-50">
        <div className="flex-1">
          <a onClick={scrollToTop} className="btn btn-ghost normal-case text-2xl font-bold mb-4 hover:text-yellow-500" style={{ cursor: 'pointer' }}>
            <img className="h-16 w-16 pb-2" alt="Logo" src="/logo.png" />Home
          </a>
          <ul className="menu menu-horizontal text-2xl">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  className={`${pathname.startsWith(link.path) ? 'text-purple-600' : 'text-purple-600'} hover:text-yellow-300`}
                  href={link.path}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-none space-x-2">
          <WalletButton />
          <ClusterUiSelect />
        </div>
      </div>
      <Background/>
      <AppHero title={undefined} subtitle={undefined} />
      <ExploreEvent />
      <MerchandiseStore />
      <AboutUs />
      <Comparison/>
      <HowItWorks />
      <Contact />
      <ClusterChecker>
        <AccountChecker />
      </ClusterChecker>
      <div className="flex-grow mx-4 lg:mx-auto">
        <Suspense
          fallback={
            <div className="text-center my-32">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          }
        >
          {children}
        </Suspense>
        <Toaster position="bottom-right" />
      </div>
    
      <PartnerLogo/>
      <footer className="text-yellow-500 py-6 bg-slate-950">
  <div className="container mx-auto px-6">
    <div className="flex flex-col md:flex-row justify-between">
      <div className="mb-6 md:w-1/3 text-center md:text-left">
        <div className="flex justify-center md:justify-start mb-0">
          <div className="flex items-center justify-center overflow-hidden">
            <Image src={logo} alt="Company Logo" width={94} height={94} className="object-cover" />
          </div>
        </div>
        <p className="text-yellow-500 mb-4">Connect with us to know more about us and to explore the activities that we do.</p>
        <div className="flex justify-center md:justify-start space-x-4 mb-4">
          <a href="#" className="rounded-full bg-yellow-100 p-2 hover:bg-purple-500" aria-label="Facebook">
            <Image src={facebookIcon} alt="Facebook" width={20} height={20} />
          </a>
          <a href="#" className="rounded-full bg-yellow-100 p-2 hover:bg-purple-500" aria-label="Instagram">
            <Image src={instagramIcon} alt="Instagram" width={20} height={20} />
          </a>
          <a href="#" className="rounded-full bg-yellow-100 p-2 hover:bg-purple-500" aria-label="Twitter">
            <Image src={twitterIcon} alt="Twitter" width={20} height={20} />
          </a>
          <a href="#" className="rounded-full bg-yellow-100 p-2 hover:bg-purple-500" aria-label="LinkedIn">
            <Image src={linkedinIcon} alt="LinkedIn" width={20} height={20} />
          </a>
        </div>
      </div>
      <div className="mb-6 md:w-1/3 text-center">
        <h3 className="text-lg font-semibold mb-2 text-yellow-500">Quick Links</h3>
        <ul className="list-none space-y-2">
          <li><a href="/Account" className="text-yellow-500 hover:text-purple-600">Account</a></li>
          <li><a href="/Cluster" className="text-yellow-500 hover:text-purple-600">Cluster</a></li>
          <li><a href="/contact" className="text-yellow-500 hover:text-purple-600">Contact</a></li>
        </ul>
      </div>
      <div className="mb-6 md:w-1/3 text-center md:text-left">
        <h3 className="text-lg font-semibold mb-2 text-yellow-500">Sign Up for Emails</h3>
        <p className="mb-4 text-yellow-500">Get first dibs on new arrivals and advance notice on everything we do.</p>
        <div className="flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-l bg-gray-800 text-yellow-500"
            value={email}
            onChange={handleEmailChange}
          />
          <button className="px-4 bg-purple-600 text-white rounded-r" onClick={handleSignUp}>Sign Up</button>
        </div>
      </div>
    </div>
    
    {/* New Section for Contributors and Trademarks */}
    <div className="">
      <h3 className="text-3xl font-semibold  text-yellow-500 text-center underline mb-2">Project Contributors</h3>
      <p className="text-yellow-500 mb-2 text-center text-lg">
        The project NFT Ticketing was made possible by the contributions of:
      </p>
      <div className="flex flex-wrap justify-center space-x-4 text-purple-400 text-xl mb-4">
        <span>•Prasanna Gadal</span>
        <span>•Sameer Shrestha</span>
        <span>•Punam Bomjan</span>
     
      </div>

      <p className="text-yellow-500 mt-4  text-center border-t border-yellow-500">
        &copy; {new Date().getFullYear()} NFT Blink. All rights reserved. Trademarks and brands are the property of their respective owners.
      </p>
    </div>
  </div>
</footer>

      
      {isModalOpen && (
        <AppModal title="My Modal" onClose={() => setIsModalOpen(false)} hide={function (): void {
          throw new Error('Function not implemented.');
        } } show={false} submit={function (): void {
          throw new Error('Function not implemented.');
        } } submitLabel={''}>
          {/* Modal content here */}
          <p>This is an example modal!</p>
        </AppModal>
      )}
    </div>
  );
};

export default UiLayout; // Ensure UiLayout is exported as a default export
