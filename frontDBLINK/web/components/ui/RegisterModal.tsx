"use client";
import React, { useState } from 'react';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, address, password, bio, genre }),
    });

    if (response.ok) {
      window.location.href = '/artist-profile';
    } else {
      alert('Registration failed');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 py-4 px-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-4 text-center text-purple-700">Artist Registration</h2>
        <form onSubmit={handleSubmit} className="grid  grid-cols-2 gap-2">
          {/* Column 1 */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2 text-purple-700">Name</label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-purple-500"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2 text-purple-700">Email</label>
            <input
              type="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-purple-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Column 2 */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2 text-purple-700">Address</label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-purple-500"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2 text-purple-700">Password</label>
            <input
              type="password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-purple-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Genre Selection */}
          <div className="mb-4 col-span-1 md:col-span-2">
            <label className="block text-sm font-semibold mb-2 text-purple-700">Genre</label>
            <select
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-purple-500"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            >
              <option value="" disabled>Select your genre</option>
              <option value="music">Music</option>
              <option value="dance">Dance</option>
              <option value="art">Art</option>
              <option value="theater">Theater</option>
              <option value="literature">Literature</option>
              {/* Add more genres as needed */}
            </select>
          </div>

          {/* Bio Field */}
          <div className="mb-4 col-span-1 md:col-span-2">
            <label className="block text-sm font-semibold mb-2 text-purple-700">Bio</label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-purple-500"
              placeholder="Tell us about yourself"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-400 font-bold transition duration-300 ease-in-out col-span-1 md:col-span-2"
          >
            Register
          </button>
        </form>
        <button
          className="mt-4 w-full text-red-600 hover:text-red-700 font-bold transition duration-300 ease-in-out"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default RegisterModal;
