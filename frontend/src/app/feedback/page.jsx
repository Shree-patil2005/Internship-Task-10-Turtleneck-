'use client';
import { useState } from 'react';
import { databases, ID } from '../lib/appwrite';

export default function FeedbackPage() {
  const [feedbackData, setFeedbackData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phone: '',
    feedback: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await databases.createDocument(
        '6823573500319e8480b6', 
        '68259b8c0003cea27c85', 
        ID.unique(),
        feedbackData
      );
      alert('Feedback submitted successfully!');
      setFeedbackData({
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        phone: '',
        feedback: '',
      });
    } catch (err) {
      alert('Feedback submission failed: ' + err.message);
    }
  };

  return (
    <div
  className="flex flex-col min-h-screen bg-cover bg-center"
  style={{
    backgroundImage: `url('https://thumbs.dreamstime.com/z/open-book-abstract-green-background-stylized-image-globe-background-open-book-abstract-green-background-243784566.jpg')`
  }}
>
<header className="bg-gradient-to-r from-green-700 to-green-500 text-white py-2 shadow-md">
    <div className="text-center">
        <h1 className="text-4xl font-extrabold drop-shadow tracking-wide">
            Welcome to Smart Read LMS Portal
        </h1>
          <p className="text-xl italic mt-2">Read • Learn • Grow</p>
        </div>
        <nav className="flex justify-center space-x-29 mt-3 text-lg font-medium tracking-wide">
          <a href="/signup" className="hover:underline hover:text-yellow-300 transition">Home</a>
          <a href="/books" className="hover:underline hover:text-yellow-300 transition">Order Book</a>
          <a href="#" className="hover:underline hover:text-yellow-300 transition">Feedback</a>
          
        </nav>
       </header>

<main className="flex-1 flex items-center justify-center p-6 ">
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl border border-yellow-300">
            <h2 className="text-2xl font-bold mb-6 text-center text-black-500">HELP US TO GROW BETTER</h2>
        <div className="flex gap-2 mb-4 ">
            <input
              placeholder="First Name"
              className="w-1/3 p-2 border rounded"
              value={feedbackData.firstName}
              onChange={(e) => setFeedbackData({ ...feedbackData, firstName: e.target.value })}
              required
            />
            <input
              placeholder="Middle Name"
              className="w-1/3 p-2 border rounded"
              value={feedbackData.middleName}
              onChange={(e) => setFeedbackData({ ...feedbackData, middleName: e.target.value })}
            />
            <input
              placeholder="Last Name"
              className="w-1/3 p-2 border rounded"
              value={feedbackData.lastName}
              onChange={(e) => setFeedbackData({ ...feedbackData, lastName: e.target.value })}
              required
            />
          </div>

           <input 
            type="email"
            placeholder="Email (Gmail)"
            className="w-full p-2 border rounded mb-4"
            value={feedbackData.email}
            onChange={(e) => setFeedbackData({ ...feedbackData, email: e.target.value })}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-2 border rounded mb-4"
            value={feedbackData.phone}
            onChange={(e) => setFeedbackData({ ...feedbackData, phone: e.target.value })}
            required
          />

          
          <textarea
            placeholder="Your Feedback"
            className="w-full p-2 border rounded mb-4"
            rows="4"
            value={feedbackData.feedback}
            onChange={(e) => setFeedbackData({ ...feedbackData, feedback: e.target.value })}
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Submit Feedback
          </button>
        </form>
      </main>

     
      <footer className="bg-gray-300 text-center p-3 text-[18px] font-bold text-gray-700 shadow-inner">
        <p>&copy; {new Date().getFullYear()} Smart Read LMS. All rights reserved.</p>
      </footer>
    </div>
  );
}
