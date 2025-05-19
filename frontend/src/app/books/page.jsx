'use client';
import { useState } from 'react';
import { databases, ID } from '../lib/appwrite';

export default function OrderBookPage() {
  const [orderData, setOrderData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phone: '',
    bookName: '',
    paymentMethod: 'Cash',
    address: '',
  });

  const [cancelData, setCancelData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phone: '',
    bookName: '',
    reason: '',
  });

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    try {
      await databases.createDocument(
        '6823573500319e8480b6',
        '6825795f002d58f0e08d',
        ID.unique(),
        orderData
      );
      alert('Order submitted successfully!');
    } catch (err) {
      alert('Order submission failed: ' + err.message);
    }
  };

  const handleCancelSubmit = async (e) => {
    e.preventDefault();
    try {
      await databases.createDocument(
        '6823573500319e8480b6',
        '68257c1e000589e716f4',
        ID.unique(),
        cancelData
      );
      alert('Cancellation request submitted!');
    } catch (err) {
      alert('Cancellation failed: ' + err.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      
      <header className="bg-gradient-to-r from-green-700 to-green-500 text-white py-1 shadow-md">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold drop-shadow tracking-wide">
            Welcome to Smart Read LMS Portal
          </h1>
          <p className="text-xl italic mt-2">Read • Learn • Grow</p>
        </div>
      <nav className="flex justify-center space-x-29 mt-3 text-lg font-medium tracking-wide">
          <a href="/signup" className="hover:underline hover:text-yellow-300 transition">Home</a>
          <a href="#" className="hover:underline hover:text-yellow-300 transition">Order Book</a>
          <a href="feedback" className="hover:underline hover:text-yellow-300 transition">Feedback</a>
          
        </nav>
      </header>

      
      <main className="flex-1 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          <form onSubmit={handleOrderSubmit} className="bg-white p-6 rounded-xl shadow-lg border border-yellow-300">
            <h2 className="text-[35px] font-bold mb-4 text-black-500 text-center">Order Book</h2>
            <div className="flex gap-2 mb-4">
              <input placeholder="First Name" className="w-1/3 p-2 border rounded" onChange={(e) => setOrderData({ ...orderData, firstName: e.target.value })} />
              <input placeholder="Middle Name" className="w-1/3 p-2 border rounded" onChange={(e) => setOrderData({ ...orderData, middleName: e.target.value })} />
              <input placeholder="Last Name" className="w-1/3 p-2 border rounded" onChange={(e) => setOrderData({ ...orderData, lastName: e.target.value })} />
            </div>
            <input type="email" placeholder="Email ID" className="w-full p-2 border rounded mb-4" onChange={(e) => setOrderData({ ...orderData, email: e.target.value })} />
            <input type="tel" placeholder="Mobile No." className="w-full p-2 border rounded mb-4" onChange={(e) => setOrderData({ ...orderData, phone: e.target.value })} />
            <input placeholder="Name of Book" className="w-full p-2 border rounded mb-4" onChange={(e) => setOrderData({ ...orderData, bookName: e.target.value })} />
            <select className="w-full p-2 border rounded mb-4" onChange={(e) => setOrderData({ ...orderData, paymentMethod: e.target.value })}>
              <option>Cash</option>
              <option>Cheque</option>
              <option>Online</option>
            </select>
            <textarea placeholder="Address" className="w-full p-2 border rounded mb-4" onChange={(e) => setOrderData({ ...orderData, address: e.target.value })}></textarea>
            <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">Submit</button>
          </form>

          
          <form onSubmit={handleCancelSubmit} className="bg-white p-6 rounded-xl shadow-lg border border-yellow-300">
            <h2 className="text-[35px] font-bold mb-4 text-black-500 text-center">Cancel Book Order</h2>
            <div className="flex gap-2 mb-4">
              <input placeholder="First Name" className="w-1/3 p-2 border rounded" onChange={(e) => setCancelData({ ...cancelData, firstName: e.target.value })} />
              <input placeholder="Middle Name" className="w-1/3 p-2 border rounded" onChange={(e) => setCancelData({ ...cancelData, middleName: e.target.value })} />
              <input placeholder="Last Name" className="w-1/3 p-2 border rounded" onChange={(e) => setCancelData({ ...cancelData, lastName: e.target.value })} />
            </div>
            <input type="email" placeholder="Email ID" className="w-full p-2 border rounded mb-4" onChange={(e) => setCancelData({ ...cancelData, email: e.target.value })} />
            <input type="tel" placeholder="Mobile No." className="w-full p-2 border rounded mb-4" onChange={(e) => setCancelData({ ...cancelData, phone: e.target.value })} />
            <input placeholder="Book Name to Cancel" className="w-full p-2 border rounded mb-4" onChange={(e) => setCancelData({ ...cancelData, bookName: e.target.value })} />
            <textarea placeholder="Reason for Cancelling" className="w-full p-2 border rounded mb-4" onChange={(e) => setCancelData({ ...cancelData, reason: e.target.value })}></textarea>
            <button type="submit" className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition">Submit</button>
          </form>
        </div>
      </main>

      
      <footer className="bg-gray-300 text-center p-3 text-[18px] font-bold text-gray-700 shadow-inner">
        <p>&copy; {new Date().getFullYear()} Smart Read LMS. All rights reserved.</p>
      </footer>
    </div>
  );
}
