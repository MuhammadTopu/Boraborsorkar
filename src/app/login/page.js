"use client"
import React, { useState } from 'react';

export default function Login() {
  const [activeForm, setActiveForm] = useState(null);

  const handleFormClick = (form) => {
    setActiveForm(form);
  };

  return (
    <>
      <div className="box">
        <div className="flex justify-center items-center min-h-screen">
          <div className="flex flex-wrap justify-center space-x-4">
            <div
              className={`h-[400px] w-[300px] border-black p-4 ${
                activeForm === 'form1' ? 'bg-red-700' : 'bg-lime-900'
              }`}
              onClick={() => handleFormClick('form1')}
            >
              <h2 className="text-2xl font-semibold text-center text-black mb-6">Log in</h2>
              <form action="#" method="POST">
                <div className="mb-4">
                  <label htmlFor="number" className="block text-black font-semibold mb-2">Mobile number</label>
                  <input type="number" id="number" name="number" className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-black font-semibold mb-2">Password</label>
                  <input type="password" id="password" name="password" className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400" required />
                </div>
                <button className="bg-transparent hover:bg-lime-500 text-lime-700 font-semibold hover:text-black py-2 px-4 border border-lime-500 hover:border-transparent rounded self-center mt-4">
                Log in
              </button>
              </form>
            </div>
            <div
              className={`h-[400px] w-[300px] border-black p-4 ${
                activeForm === 'form2' ? 'bg-red-700' : 'bg-lime-900'
              }`}
              onClick={() => handleFormClick('form2')}
            >
              <h2 className="text-2xl font-semibold text-center text-black mb-6">Register</h2>
              <form action="#" method="POST">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-black font-semibold mb-2">Full Name</label>
                  <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="number" className="block text-black font-semibold mb-2">Mobile number</label>
                  <input type="number" id="number" name="number" className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-black font-semibold mb-2">Password</label>
                  <input type="password" id="password" name="password" className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400" required />
                  <button className="bg-transparent hover:bg-lime-500 text-lime-700 font-semibold hover:text-black py-2 px-4 border border-lime-500 hover:border-transparent rounded self-center mt-4">
                Register
              </button>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
